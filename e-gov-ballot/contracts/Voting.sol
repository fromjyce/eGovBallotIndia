// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@metamask/contracts/token/ERC20/IERC20.sol";


contract VotingSystem {
    address public admin;
    mapping(address => bool) public voters;
    mapping(uint256 => uint256) public votes;
    bool public votingOpen;
    mapping(address => bool) public hasVoted;
    mapping(uint256 => bool) public usedSignatures;
    address public tokenContractAddress = 0x123; // Replace with the actual token contract address
  

    struct VoterDetails {
        uint256 voterId;
        address contractId;
        bytes32 passwordHash;
        uint256 privateKey;
    }

    contract VotingSystem {
    struct Candidate {
        bytes32 realName;
        string partyName;
        uint256 votesAttained;
    }

    mapping(uint256 => Candidate) public candidates;
    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

  function getCandidateDetails(uint256 candidateId) external view returns (string memory, string memory, uint256) {
        Candidate memory candidate = candidates[candidateId];
        require(candidate.votesAttained > 0, "Candidate does not exist or has not received any votes");

        // Generate a pseudo-random name for anonymity
        string memory randomName = generatePseudoRandomName(candidate.randomName, candidateId);

        return (randomName, candidate.partyName, candidate.votesAttained);
    }

    function generatePseudoRandomName(string memory seed, uint256 candidateId) internal pure returns (string memory) {
        // Use a hash function to generate pseudo-randomness
        bytes32 hash = keccak256(abi.encodePacked(seed, candidateId));
        uint256 randomNumber = uint256(hash) % 10000; // Example: Limit to a range

        // Convert the random number to a string
        string memory randomName = uint2str(randomNumber);

        return randomName;
    }

    // Helper function to convert uint to string
    function uint2str(uint256 _i) internal pure returns (string memory str) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        j = _i;
        while (j != 0) {
            bstr[--k] = bytes1(uint8(48 + j % 10));
            j /= 10;
        }
        str = string(bstr);
    }

}

      mapping(uint256 => Candidate) public candidates;


    mapping(address => VoterDetails) public voterDetails;

    function addCandidate(uint256 candidateId, string memory name, string memory partyName) external onlyAdmin {
        require(candidates[candidateId].votesAttained == 0, "Candidate with the same ID already exists");
        candidates[candidateId] = Candidate(name, partyName, 0);
    }
    

    function registerVoter(uint256 _voterId, address _contractId, bytes32 _passwordHash, uint256 _privateKey) external {
        require(!voters[msg.sender], "Voter already registered");
        voters[msg.sender] = true;
        voterDetails[msg.sender] = VoterDetails(_voterId, _contractId, _passwordHash, _privateKey);
    }

    function verifyVoter(uint256 _voterId, address _contractId, bytes32 _passwordHash, uint256 _privateKey) external view returns (bool) {
        VoterDetails memory voter = voterDetails[msg.sender];
        return (
            voters[msg.sender] &&
            voter.voterId == _voterId &&
            voter.contractId == _contractId &&
            voter.passwordHash == _passwordHash &&
            voter.privateKey == _privateKey
        );
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }
  function encryptDetails(uint256 _voterId, address _contractAddress, string memory _password, uint256 _privateKey) internal view returns (uint256) {
        bytes32 encryptedDetails = keccak256(abi.encodePacked(_voterId, _contractAddress, _password, _privateKey));
        return uint256(encryptedDetails);
    }
    import "@metamask/contracts/token/ERC20/IERC20.sol";

function performTokenTransfer(address to, uint256 amount) internal {
    IERC20 tokenContract = IERC20(tokenContractAddress);
    require(tokenContract.transfer(to, amount), "Token transfer failed");
}

 function castVoteAndPay(uint256 encryptedVote) external onlyVotingOpen {
    address voter = msg.sender;

  
    require(!hasVoted[voter], "You have already voted");

    uint256 tokenAmount = 0.5 ether;
    performTokenTransfer(address(this), tokenAmount);

   
    uint256 paillierPublicKey = generatePaillierPublicKey();
    uint256 encryptedVoteResult = encryptVote(encryptedVote, paillierPublicKey);

    hasVoted[voter] = true;
    emit HomomorphicVoteCasted(encryptedVoteResult);
}

function encryptVote(uint256 _vote, uint256 publicKey) internal pure returns (uint256) {
    uint256 n = publicKey;
    uint256 g = 10; // Replace with the actual generator

    uint256 r = 123; // Replace with a secure method to generate randomness
    return (modexp(g, _vote, n) * modexp(r, n, n * n)) % (n * n);
}

event HomomorphicVoteCasted(uint256 encryptedVote);


    
    event RingSignedVoteCasted(uint256[] ringSignature, uint256 encryptedVote);
  
  

  modifier onlyVotingOpen() {
    require(votingOpen, "Voting is closed");
    require(!hasVoted[msg.sender], "You have already voted");
    _;
}

   
  function generatePaillierPublicKey() internal pure returns (uint256, uint256) {
        uint256 n = 841307; // Replace with a secure method to generate n (product of two large primes)
        uint256 g = 10;     // Replace with a secure method to generate g (generator)
        return (n, g);
    }
  
    function modexp(uint256 base, uint256 exponent, uint256 mod) internal pure returns (uint256 result) {
        result = 1;
        while (exponent > 0) {
            if (exponent % 2 == 1) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exponent /= 2;
        }
    }


    function createRingSignature(uint256[] memory voters, uint256 message) internal view returns (uint256[] memory) {
        uint256 n = voters.length;

        require(n > 1, "Ring signature should involve at least two voters");

        uint256[] memory ringSignature = new uint256[](n);

       
        for (uint256 i = 0; i < n; i++) {

            ringSignature[i] = modexp(message, voters[i], n);
        }

        return ringSignature;
    }

    function castRingSignedVote(uint256[] memory ringSignature, uint256 encryptedVote) external onlyVotingOpen {
        require(voters[msg.sender], "You are not a registered voter");

        require(!usedSignatures[hashRingSignature(ringSignature)], "Ring signature has already been used");

        require(verifyRingSignature(ringSignature, encryptedVote), "Invalid ring signature");

 
        usedSignatures[hashRingSignature(ringSignature)] = true;

      
        votes[encryptedVote]++;
        emit RingSignedVoteCasted(ringSignature, encryptedVote);
    }

    function hashRingSignature(uint256[] memory ringSignature) internal pure returns (uint256) {
        uint256 hash = 0;
        for (uint256 i = 0; i < ringSignature.length; i++) {
            hash ^= ringSignature[i];
        }
        return hash;
    }


    function verifyRingSignature(uint256[] memory ringSignature, uint256 encryptedVote) internal view returns (bool) {
        // Simulated verification process, in a real-world scenario use proper verification logic
        uint256 expectedHash = hashRingSignature(ringSignature);
        return expectedHash == encryptedVote;
    }

     function encryptFragment(uint256 fragment, uint256 publicKey, uint256 randomness) internal view returns (uint256, uint256) {
    require(fragment < n, "Fragment should be less than n");

    // Assuming that 'g' is the generator and 'p' is the prime, both part of the public key
    uint256 g = publicKey;

    // Calculate the first part of the cipher text: g^r
    uint256 cipherTextPart1 = modexp(g, randomness, n);

    // Calculate the second part of the cipher text: (g^r * fragment) % p
    uint256 cipherTextPart2 = (modexp(publicKey, randomness, n) * fragment) % n;

    return (cipherTextPart1, cipherTextPart2);
}

     function divideEncryptedVote(uint256 encryptedVote) internal view returns (uint256[] memory) {

        uint256 fragmentSize = n / 3;
        uint256[] memory fragments = new uint256[](3);
        uint256 fragmentSize = n / 3;

        for (uint256 i = 0; i < 3; i++) {
            fragments[i] = (encryptedVote + i * fragmentSize) % n;
        }

        return fragments;
    }
function updateEncryptedCounts(uint256[] memory encryptedFragments) internal {
    for (uint256 i = 0; i < encryptedFragments.length; i++) {
        uint256 encryptedVote = encryptedFragments[i];
        uint256 decryptedVote = decryptCount(encryptedVote);
        votes[decryptedVote]++;
        (string memory randomName, string memory partyName, uint256 votesAttained) = getCandidateDetails(decryptedVote)
        emit ElectionResults(votesAttained, decryptedVote);
    }
}
   event ElectionResults(uint256 totalVotes, uint256[] decryptedVotes);


function revealFinalResults() external view returns (string[] memory, string[] memory, uint256[] memory) {
    require(!votingOpen, "Voting is still open");

    uint256 candidateCount = candidates.length;
    string[] memory realNames = new string[](candidateCount);
    string[] memory partyNames = new string[](candidateCount);
    uint256[] memory votesAttained = new uint256[](candidateCount);

    for (uint256 i = 0; i < candidateCount; i++) {
        realNames[i] = candidates[i].realName;
        partyNames[i] = candidates[i].partyName;
        votesAttained[i] = candidates[i].votesAttained;
    }

    return (realNames, partyNames, votesAttained);
}

}
 

