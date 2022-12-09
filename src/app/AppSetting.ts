export class AppSettings {
    public static API_GRAPHQL_ENDPOINT='https://localhost:7287/graphql';
    public static readonly API_URL='https://localhost:7287/api/users';
    public static SCHEMA_STRING=`
    directive @defer(
      """
      If this argument label has a value other than null, it will be passed on to the result of this defer directive. This label is intended to give client applications a way to identify to which fragment a deferred result belongs to.
      """
      label: String
    
      """
      Deferred when true.
      """
      if: Boolean
    ) on FRAGMENT_SPREAD | INLINE_FRAGMENT
    

    directive @stream(
      """
      If this argument label has a value other than null, it will be passed on to the result of this stream directive. This label is intended to give client applications a way to identify to which fragment a streamed result belongs to.
      """
      label: String
    
      """
      The initial elements that shall be send down to the consumer.
      """
      initialCount: Int! = 0
    
      """
      Streamed when true.
      """
      if: Boolean
    ) on FIELD
    
    type Query {
      users(where: UserFilterInput, order: [UserSortInput!]): [User!]!
    }
    
    type Mutation {
      saveUser(newUser: UserInput!): User!
      changePassword(newPassword: String!, id: Int!): String!
    }
    
    input UserFilterInput {
      and: [UserFilterInput!]
      or: [UserFilterInput!]
      id: ComparableNullableOfInt32OperationFilterInput
      name: StringOperationFilterInput
      email: StringOperationFilterInput
      password: StringOperationFilterInput
    }
    
    input UserSortInput {
      id: SortEnumType
      name: SortEnumType
      email: SortEnumType
      password: SortEnumType
    }
    
    input ComparableNullableOfInt32OperationFilterInput {
      eq: Int
      neq: Int
      in: [Int]
      nin: [Int]
      gt: Int
      ngt: Int
      gte: Int
      ngte: Int
      lt: Int
      nlt: Int
      lte: Int
      nlte: Int
    }
    
    input StringOperationFilterInput {
      and: [StringOperationFilterInput!]
      or: [StringOperationFilterInput!]
      eq: String
      neq: String
      contains: String
      ncontains: String
      in: [String]
      nin: [String]
      startsWith: String
      nstartsWith: String
      endsWith: String
      nendsWith: String
    }
    
    enum SortEnumType {
      ASC
      DESC
    }
    
    input UserInput {
      id: Int
      name: String!
      email: String!
      password: String!
    }
    
    type User {
      id: Int
      name: String!
      email: String!
      password: String!
    }
    `;
}