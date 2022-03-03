/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlaces = /* GraphQL */ `
  mutation CreatePlaces(
    $input: CreatePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    createPlaces(input: $input, condition: $condition) {
      id
      name
      location
      state
      country
      description
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePlaces = /* GraphQL */ `
  mutation UpdatePlaces(
    $input: UpdatePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    updatePlaces(input: $input, condition: $condition) {
      id
      name
      location
      state
      country
      description
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePlaces = /* GraphQL */ `
  mutation DeletePlaces(
    $input: DeletePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    deletePlaces(input: $input, condition: $condition) {
      id
      name
      location
      state
      country
      description
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
