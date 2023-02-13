/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
 query MyQuery {
  listUsers(filter: {email: {eq: "user4@toto.com"}}) {
    items {
      email
      id
      orga_id
      orga_rank
      pseudo
    }
  }
}
`;

export const getIdUser = /* GraphQL */ `
 query MyQuery ($email: String){
  listUsers(filter: {email: {eq: $email}}) {
    items {
      id
    }
  }
}
`;
export const getOrga = /* GraphQL */ `
query MyQuery {
  listOrganisations(filter: {id: {eq: "4"}}) {
    items {
      credits
      id
      name
      orga_type
      users_id
    }
  }
}

`;
/* mutation ajout credit*/

export const updateCredits = `mutation MyMutation {
  updateOrganisationCredits(input: {id: "4", credits: 18}) {
    id
    name
    credits
  }
}
`;
export const updateUser_Orga =`
mutation MyMutation {
    updateUserOrga(input: {id: "3", orga_id: "4"}) {
        id
        email
        orga_id
    }
}`;

/* recup orga*/
export const getOrgaByName = /* GraphQL */ `
query MyQuery {
    listOrganisations(filter: {name: {eq: "User3"}}) {
        items {
            credits
            id
            name
            orga_type
            users_id
            stripe_id

        }
    }
}
`;

export const getUserOrga = /* GraphQL */ `
query MyQuery {
    getUser(id: "4") {
        email
        id
        orga {
            name
            credits
            orga_type
            stripe_id

        }
        orga_rank
        pseudo
    }
}
`;

/* recup id user*/
export const getIdByName = /* GraphQL */ `
query MyQuery ($email : String = "user4@toto.com") {
    byEmail(email: $email) {
        items {
            id
        orga {
            credits
            }
        }
    }
}
`;
export const getOrganisation = /* GraphQL */ `
  query GetOrganisation($id: ID!) {
    getOrganisation(id: $id) {
      id
      name
      orga_type
      credits
      stripe_id
      users_id
      users {
        items {
          id
          pseudo
          email
          orga_id
          orga_rank
          createdAt
          updatedAt
          organisationUsersId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOrganisations = /* GraphQL */ `
  query ListOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        orga_type
        credits
        stripe_id
        users_id
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      pseudo
      email
      orga_id
      orga {
        id
        name
        orga_type
        credits
        stripe_id
        users_id
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      orga_rank
      createdAt
      updatedAt
      organisationUsersId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pseudo
        email
        orga_id
        orga {
          id
          name
          orga_type
          credits
          stripe_id
          users_id
          createdAt
          updatedAt
          owner
        }
        orga_rank
        createdAt
        updatedAt
        organisationUsersId
      }
      nextToken
    }
  }
`;
export const byEmail = /* GraphQL */ `
  query ByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pseudo
        email
        orga_id
        orga {
          id
          name
          orga_type
          credits
          stripe_id
          users_id
          createdAt
          updatedAt
          owner
        }
        orga_rank
        createdAt
        updatedAt
        organisationUsersId
      }
      nextToken
    }
  }
`;
export const usersByOrga_idAndPseudo = /* GraphQL */ `
  query UsersByOrga_idAndPseudo(
    $orga_id: ID!
    $pseudo: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByOrga_idAndPseudo(
      orga_id: $orga_id
      pseudo: $pseudo
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pseudo
        email
        orga_id
        orga {
          id
          name
          orga_type
          credits
          stripe_id
          users_id
          createdAt
          updatedAt
          owner
        }
        orga_rank
        createdAt
        updatedAt
        organisationUsersId
      }
      nextToken
    }
  }
`;
