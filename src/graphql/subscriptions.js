/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganisation = /* GraphQL */ `
  subscription OnCreateOrganisation(
    $filter: ModelSubscriptionOrganisationFilterInput
    $owner: String
  ) {
    onCreateOrganisation(filter: $filter, owner: $owner) {
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
export const onUpdateOrganisation = /* GraphQL */ `
  subscription OnUpdateOrganisation(
    $filter: ModelSubscriptionOrganisationFilterInput
    $owner: String
  ) {
    onUpdateOrganisation(filter: $filter, owner: $owner) {
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
export const onDeleteOrganisation = /* GraphQL */ `
  subscription OnDeleteOrganisation(
    $filter: ModelSubscriptionOrganisationFilterInput
    $owner: String
  ) {
    onDeleteOrganisation(filter: $filter, owner: $owner) {
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
