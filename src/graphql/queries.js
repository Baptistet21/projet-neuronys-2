/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
