# E-GOV BALLOT INDIA DApp

## Project Overview

**Project Title:** E-GOV BALLOT INDIA  
**Objective:** To develop a robust and secure decentralized application (DApp) for the voting process in India, leveraging the CosVM blockchain platform and exploiting the most 
 of the encryption technique.

## Team W:

- Deepthi Ilangovan
- Jayashre K
- Shanmathi Ganesan

## Affiliation

Shiv Nadar University Chennai.

## Links

 [User Interface Protype](https://www.canva.com/design/DAF7KrFDQi4/0og_fM4xoRoTsOCv5R6OGw/view?utm_content=DAF7KrFDQi4&utm_campaign=designshare&utm_medium=link&utm_source=editor)
 [Presentation Link](https://www.canva.com/design/DAF7KeOGj7Q/DMWXo3lZGb8Mze9Zqwkffg/view?utm_content=DAF7KeOGj7Q&utm_campaign=designshare&utm_medium=link&utm_source=editor)

## Introduction

Our project aims to enhance the integrity, efficiency, and transparency of the voting process in India by leveraging blockchain technology. The E-GOV BALLOT DApp utilizes innovative cryptographic techniques, including ring signatures, homomorphic encryptionand EL-GAMMAL ie, double encryption, to guarantee a tamper-proof and secure voting system.

This Dapp comes in 3 use cases. one is for the voters to cast their votes to candidates, 2nd one is or the candidates to view their status, 3rd one is for the admin, who logs in using the admin credentials and is in charge of deploying smart contracts.

Our app is also available in local languages like, tamil , hindi and english soon will be extended to other languages as well.

## Phases of the Project

1. **Poll Creation (Phase 1) & Wallet Creation for Voters (Phase 2):**
   - The government creates a wallet for each eligible citizen who owns a voter ID. This wallet creation along with a private and a Contract address.
   - Wallets have a default of 1 token for a single transaction (one vote). The identity of the citizen will be verified during the registration of the wallet. the verification involves, biometrics and password hash.
   - All these personal verification will be kept in a hash, ensuring maximum data confidentiality.
   - The identity of the candidate will be checked, at the time of voting and will be cross verifing using the hash data available.
   - The candidates who will be added for the participation in the election will be added by the admin, and the identity of the candidate will be randomised and thereby ensuring no data manipulation can be done by the admin at the time of the election.





2. **Casting Vote(phase 3)**
   - Each voter is given 1 token to cast a single vote. After all the biometrics verification is done in the voting booth, the voter's wallet will be available to him to log in for 5mins. He/She should log in using their voter Id and password and at the backend all their other linked documents will also get verified.
   - When the user logs in, automatically he logs into his metamask wallet as well, from there he/sbe can select any candidate and vote for them by creating a transaction of 1 token. 
   - .

3. **After Voting (Phase 4):**
   - The vote that was done by the voter will be encrypted using Homomorphic encryption and an signature called Ring Signature which acts as a verification that the vote for this person is done and any other vote from the same account through any means will not be considered. It ensures vote authenticity.
   - Later this encrypted+signed piece of text will be fragmented into few pieces and these fragements will again be encryptred using El-Gamar which ultimately leads to a 2 level encryption and 3 level secured system.    

4. **Fragments Distribution (Phase 5):**
   - Encrypted fragments are sent to a predefined number of nodes,which has high computatuional power and belongs to the higher government officials and election commission members.

5. **Counting Votes (Phase 6):**
   - After the fragments are distributed over the nodes, the use of homomorphic encryption enables us to use the encrypted data without decrypting, thereby reducing time and computational resource wastage.
   - The votes are calculated, keeping the details of the candidates encrypted thereby avoiding the data manipulation and the need to break in to the system.

6. **Viewing Real-Time Votes (Phase 7):**
   - The E-GOV BALLOT INDIA DApp will also allow the voter to view real time vote counts.
thereby ensuring data transparency.
7. **After Voting Period (Phase 8):**
   - The encrypted details of the candidates will be revealed and the winner will be announced.
   - A smart contract initiates the transfer of tokens from voters to the winning candidate's wallet.

## Encryption and Decryption (3 Levels of Security)

- **Encryption:**
  - Homomorphic encryption of Paillier for efficient ciphertext operations.
  - EL-GAMMAL encryption as a second layer to prevent replay attacks.
  - the use of Ring signature makes sure that Double voting is impossible
  - Shamir Secret Share method for robust data distribution.

- **Decryption:**
  - Votes remain encrypted until the end of the election, preserving data manipulation.

## E-GOV BALLOT DApp Features
  
  - Use of Cosvm reduces the gas price to a large extent, thereby making it a best choice for large scale usage.
  - User-friendly voting interface
- **Security Measures:**
  - Prevention of double voting through ring signatures.
  - Fragmentation of data for enhanced security.
  - Restricted voting options after the maximum transaction limit is reached.

## Considerations:

- Physical dependency on components like fingerprint and iris verification.
- An admin node is required to load the smart contract; the system is not fully automated.
- Many technical assistants would be required.


## Constraints:
  - Less awarness among the people about blockchain, its working.
  - more Technical support will be needed on the rural side.

## Tech Stack
- CosVM
- React (UI)
- HTML, CSS, Javascript
- HardHat
- Solidity (Smart Contracts)

## Installation and Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the DApp: `npm start`.

## Contribution

We welcome contributions to enhance the security, efficiency, and features of the E-GOV BALLOT DApp. Please follow the contribution guidelines in the repository.

## License

This project is licensed under the [Apache License](LICENSE).

## Acknowledgments

We acknowledge the support of Shiv Nadar University Chennai and the opportunities provided for innovative projects.

**Thank you for contributing to a secure and transparent electoral system in India!**
