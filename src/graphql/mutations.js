/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganisation = /* GraphQL */ `
  mutation CreateOrganisation(
    $input: CreateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    createOrganisation(input: $input, condition: $condition) {
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
export const updateOrganisation = /* GraphQL */ `
  mutation UpdateOrganisation(
    $input: UpdateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    updateOrganisation(input: $input, condition: $condition) {
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
export const deleteOrganisation = /* GraphQL */ `
  mutation DeleteOrganisation(
    $input: DeleteOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    deleteOrganisation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
