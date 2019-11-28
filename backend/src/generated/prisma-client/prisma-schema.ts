// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateDevice {
  count: Int!
}

type AggregateLetterEmail {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateTR {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Device {
  id: ID!
  published: Boolean!
  name_EN: String!
  name_UA: String!
  name_RUS: String!
  category: String!
  module: String
  tr: TR!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type DeviceConnection {
  pageInfo: PageInfo!
  edges: [DeviceEdge]!
  aggregate: AggregateDevice!
}

input DeviceCreateInput {
  id: ID
  published: Boolean
  name_EN: String!
  name_UA: String!
  name_RUS: String!
  category: String!
  module: String
  tr: TRCreateOneWithoutDevice_idInput!
  author: UserCreateOneWithoutDevicesInput!
}

input DeviceCreateManyWithoutAuthorInput {
  create: [DeviceCreateWithoutAuthorInput!]
  connect: [DeviceWhereUniqueInput!]
}

input DeviceCreateManyWithoutTrInput {
  create: [DeviceCreateWithoutTrInput!]
  connect: [DeviceWhereUniqueInput!]
}

input DeviceCreateWithoutAuthorInput {
  id: ID
  published: Boolean
  name_EN: String!
  name_UA: String!
  name_RUS: String!
  category: String!
  module: String
  tr: TRCreateOneWithoutDevice_idInput!
}

input DeviceCreateWithoutTrInput {
  id: ID
  published: Boolean
  name_EN: String!
  name_UA: String!
  name_RUS: String!
  category: String!
  module: String
  author: UserCreateOneWithoutDevicesInput!
}

type DeviceEdge {
  node: Device!
  cursor: String!
}

enum DeviceOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  name_EN_ASC
  name_EN_DESC
  name_UA_ASC
  name_UA_DESC
  name_RUS_ASC
  name_RUS_DESC
  category_ASC
  category_DESC
  module_ASC
  module_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DevicePreviousValues {
  id: ID!
  published: Boolean!
  name_EN: String!
  name_UA: String!
  name_RUS: String!
  category: String!
  module: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input DeviceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  name_EN: String
  name_EN_not: String
  name_EN_in: [String!]
  name_EN_not_in: [String!]
  name_EN_lt: String
  name_EN_lte: String
  name_EN_gt: String
  name_EN_gte: String
  name_EN_contains: String
  name_EN_not_contains: String
  name_EN_starts_with: String
  name_EN_not_starts_with: String
  name_EN_ends_with: String
  name_EN_not_ends_with: String
  name_UA: String
  name_UA_not: String
  name_UA_in: [String!]
  name_UA_not_in: [String!]
  name_UA_lt: String
  name_UA_lte: String
  name_UA_gt: String
  name_UA_gte: String
  name_UA_contains: String
  name_UA_not_contains: String
  name_UA_starts_with: String
  name_UA_not_starts_with: String
  name_UA_ends_with: String
  name_UA_not_ends_with: String
  name_RUS: String
  name_RUS_not: String
  name_RUS_in: [String!]
  name_RUS_not_in: [String!]
  name_RUS_lt: String
  name_RUS_lte: String
  name_RUS_gt: String
  name_RUS_gte: String
  name_RUS_contains: String
  name_RUS_not_contains: String
  name_RUS_starts_with: String
  name_RUS_not_starts_with: String
  name_RUS_ends_with: String
  name_RUS_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  module: String
  module_not: String
  module_in: [String!]
  module_not_in: [String!]
  module_lt: String
  module_lte: String
  module_gt: String
  module_gte: String
  module_contains: String
  module_not_contains: String
  module_starts_with: String
  module_not_starts_with: String
  module_ends_with: String
  module_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [DeviceScalarWhereInput!]
  OR: [DeviceScalarWhereInput!]
  NOT: [DeviceScalarWhereInput!]
}

type DeviceSubscriptionPayload {
  mutation: MutationType!
  node: Device
  updatedFields: [String!]
  previousValues: DevicePreviousValues
}

input DeviceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DeviceWhereInput
  AND: [DeviceSubscriptionWhereInput!]
  OR: [DeviceSubscriptionWhereInput!]
  NOT: [DeviceSubscriptionWhereInput!]
}

input DeviceUpdateInput {
  published: Boolean
  name_EN: String
  name_UA: String
  name_RUS: String
  category: String
  module: String
  tr: TRUpdateOneRequiredWithoutDevice_idInput
  author: UserUpdateOneRequiredWithoutDevicesInput
}

input DeviceUpdateManyDataInput {
  published: Boolean
  name_EN: String
  name_UA: String
  name_RUS: String
  category: String
  module: String
}

input DeviceUpdateManyMutationInput {
  published: Boolean
  name_EN: String
  name_UA: String
  name_RUS: String
  category: String
  module: String
}

input DeviceUpdateManyWithoutAuthorInput {
  create: [DeviceCreateWithoutAuthorInput!]
  delete: [DeviceWhereUniqueInput!]
  connect: [DeviceWhereUniqueInput!]
  set: [DeviceWhereUniqueInput!]
  disconnect: [DeviceWhereUniqueInput!]
  update: [DeviceUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [DeviceUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [DeviceScalarWhereInput!]
  updateMany: [DeviceUpdateManyWithWhereNestedInput!]
}

input DeviceUpdateManyWithoutTrInput {
  create: [DeviceCreateWithoutTrInput!]
  delete: [DeviceWhereUniqueInput!]
  connect: [DeviceWhereUniqueInput!]
  set: [DeviceWhereUniqueInput!]
  disconnect: [DeviceWhereUniqueInput!]
  update: [DeviceUpdateWithWhereUniqueWithoutTrInput!]
  upsert: [DeviceUpsertWithWhereUniqueWithoutTrInput!]
  deleteMany: [DeviceScalarWhereInput!]
  updateMany: [DeviceUpdateManyWithWhereNestedInput!]
}

input DeviceUpdateManyWithWhereNestedInput {
  where: DeviceScalarWhereInput!
  data: DeviceUpdateManyDataInput!
}

input DeviceUpdateWithoutAuthorDataInput {
  published: Boolean
  name_EN: String
  name_UA: String
  name_RUS: String
  category: String
  module: String
  tr: TRUpdateOneRequiredWithoutDevice_idInput
}

input DeviceUpdateWithoutTrDataInput {
  published: Boolean
  name_EN: String
  name_UA: String
  name_RUS: String
  category: String
  module: String
  author: UserUpdateOneRequiredWithoutDevicesInput
}

input DeviceUpdateWithWhereUniqueWithoutAuthorInput {
  where: DeviceWhereUniqueInput!
  data: DeviceUpdateWithoutAuthorDataInput!
}

input DeviceUpdateWithWhereUniqueWithoutTrInput {
  where: DeviceWhereUniqueInput!
  data: DeviceUpdateWithoutTrDataInput!
}

input DeviceUpsertWithWhereUniqueWithoutAuthorInput {
  where: DeviceWhereUniqueInput!
  update: DeviceUpdateWithoutAuthorDataInput!
  create: DeviceCreateWithoutAuthorInput!
}

input DeviceUpsertWithWhereUniqueWithoutTrInput {
  where: DeviceWhereUniqueInput!
  update: DeviceUpdateWithoutTrDataInput!
  create: DeviceCreateWithoutTrInput!
}

input DeviceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  name_EN: String
  name_EN_not: String
  name_EN_in: [String!]
  name_EN_not_in: [String!]
  name_EN_lt: String
  name_EN_lte: String
  name_EN_gt: String
  name_EN_gte: String
  name_EN_contains: String
  name_EN_not_contains: String
  name_EN_starts_with: String
  name_EN_not_starts_with: String
  name_EN_ends_with: String
  name_EN_not_ends_with: String
  name_UA: String
  name_UA_not: String
  name_UA_in: [String!]
  name_UA_not_in: [String!]
  name_UA_lt: String
  name_UA_lte: String
  name_UA_gt: String
  name_UA_gte: String
  name_UA_contains: String
  name_UA_not_contains: String
  name_UA_starts_with: String
  name_UA_not_starts_with: String
  name_UA_ends_with: String
  name_UA_not_ends_with: String
  name_RUS: String
  name_RUS_not: String
  name_RUS_in: [String!]
  name_RUS_not_in: [String!]
  name_RUS_lt: String
  name_RUS_lte: String
  name_RUS_gt: String
  name_RUS_gte: String
  name_RUS_contains: String
  name_RUS_not_contains: String
  name_RUS_starts_with: String
  name_RUS_not_starts_with: String
  name_RUS_ends_with: String
  name_RUS_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  module: String
  module_not: String
  module_in: [String!]
  module_not_in: [String!]
  module_lt: String
  module_lte: String
  module_gt: String
  module_gte: String
  module_contains: String
  module_not_contains: String
  module_starts_with: String
  module_not_starts_with: String
  module_ends_with: String
  module_not_ends_with: String
  tr: TRWhereInput
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [DeviceWhereInput!]
  OR: [DeviceWhereInput!]
  NOT: [DeviceWhereInput!]
}

input DeviceWhereUniqueInput {
  id: ID
}

type LetterEmail {
  id: ID!
  from: String!
  subject: String!
  text: String!
}

type LetterEmailConnection {
  pageInfo: PageInfo!
  edges: [LetterEmailEdge]!
  aggregate: AggregateLetterEmail!
}

input LetterEmailCreateInput {
  id: ID
  from: String!
  subject: String!
  text: String!
}

type LetterEmailEdge {
  node: LetterEmail!
  cursor: String!
}

enum LetterEmailOrderByInput {
  id_ASC
  id_DESC
  from_ASC
  from_DESC
  subject_ASC
  subject_DESC
  text_ASC
  text_DESC
}

type LetterEmailPreviousValues {
  id: ID!
  from: String!
  subject: String!
  text: String!
}

type LetterEmailSubscriptionPayload {
  mutation: MutationType!
  node: LetterEmail
  updatedFields: [String!]
  previousValues: LetterEmailPreviousValues
}

input LetterEmailSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LetterEmailWhereInput
  AND: [LetterEmailSubscriptionWhereInput!]
  OR: [LetterEmailSubscriptionWhereInput!]
  NOT: [LetterEmailSubscriptionWhereInput!]
}

input LetterEmailUpdateInput {
  from: String
  subject: String
  text: String
}

input LetterEmailUpdateManyMutationInput {
  from: String
  subject: String
  text: String
}

input LetterEmailWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  subject: String
  subject_not: String
  subject_in: [String!]
  subject_not_in: [String!]
  subject_lt: String
  subject_lte: String
  subject_gt: String
  subject_gte: String
  subject_contains: String
  subject_not_contains: String
  subject_starts_with: String
  subject_not_starts_with: String
  subject_ends_with: String
  subject_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [LetterEmailWhereInput!]
  OR: [LetterEmailWhereInput!]
  NOT: [LetterEmailWhereInput!]
}

input LetterEmailWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDevice(data: DeviceCreateInput!): Device!
  updateDevice(data: DeviceUpdateInput!, where: DeviceWhereUniqueInput!): Device
  updateManyDevices(data: DeviceUpdateManyMutationInput!, where: DeviceWhereInput): BatchPayload!
  upsertDevice(where: DeviceWhereUniqueInput!, create: DeviceCreateInput!, update: DeviceUpdateInput!): Device!
  deleteDevice(where: DeviceWhereUniqueInput!): Device
  deleteManyDevices(where: DeviceWhereInput): BatchPayload!
  createLetterEmail(data: LetterEmailCreateInput!): LetterEmail!
  updateLetterEmail(data: LetterEmailUpdateInput!, where: LetterEmailWhereUniqueInput!): LetterEmail
  updateManyLetterEmails(data: LetterEmailUpdateManyMutationInput!, where: LetterEmailWhereInput): BatchPayload!
  upsertLetterEmail(where: LetterEmailWhereUniqueInput!, create: LetterEmailCreateInput!, update: LetterEmailUpdateInput!): LetterEmail!
  deleteLetterEmail(where: LetterEmailWhereUniqueInput!): LetterEmail
  deleteManyLetterEmails(where: LetterEmailWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createTR(data: TRCreateInput!): TR!
  updateTR(data: TRUpdateInput!, where: TRWhereUniqueInput!): TR
  updateManyTRs(data: TRUpdateManyMutationInput!, where: TRWhereInput): BatchPayload!
  upsertTR(where: TRWhereUniqueInput!, create: TRCreateInput!, update: TRUpdateInput!): TR!
  deleteTR(where: TRWhereUniqueInput!): TR
  deleteManyTRs(where: TRWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String!
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  published: Boolean
  title: String!
  content: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  id: ID
  published: Boolean
  title: String!
  content: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  device(where: DeviceWhereUniqueInput!): Device
  devices(where: DeviceWhereInput, orderBy: DeviceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Device]!
  devicesConnection(where: DeviceWhereInput, orderBy: DeviceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeviceConnection!
  letterEmail(where: LetterEmailWhereUniqueInput!): LetterEmail
  letterEmails(where: LetterEmailWhereInput, orderBy: LetterEmailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LetterEmail]!
  letterEmailsConnection(where: LetterEmailWhereInput, orderBy: LetterEmailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LetterEmailConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  tR(where: TRWhereUniqueInput!): TR
  tRs(where: TRWhereInput, orderBy: TROrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TR]!
  tRsConnection(where: TRWhereInput, orderBy: TROrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TRConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  CUSTOMER
}

type Subscription {
  device(where: DeviceSubscriptionWhereInput): DeviceSubscriptionPayload
  letterEmail(where: LetterEmailSubscriptionWhereInput): LetterEmailSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  tR(where: TRSubscriptionWhereInput): TRSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type TR {
  id: ID!
  name_TR_UA: String!
  name_TR_EN: String!
  device_id(where: DeviceWhereInput, orderBy: DeviceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Device!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TRConnection {
  pageInfo: PageInfo!
  edges: [TREdge]!
  aggregate: AggregateTR!
}

input TRCreateInput {
  id: ID
  name_TR_UA: String!
  name_TR_EN: String!
  device_id: DeviceCreateManyWithoutTrInput
}

input TRCreateOneWithoutDevice_idInput {
  create: TRCreateWithoutDevice_idInput
  connect: TRWhereUniqueInput
}

input TRCreateWithoutDevice_idInput {
  id: ID
  name_TR_UA: String!
  name_TR_EN: String!
}

type TREdge {
  node: TR!
  cursor: String!
}

enum TROrderByInput {
  id_ASC
  id_DESC
  name_TR_UA_ASC
  name_TR_UA_DESC
  name_TR_EN_ASC
  name_TR_EN_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TRPreviousValues {
  id: ID!
  name_TR_UA: String!
  name_TR_EN: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TRSubscriptionPayload {
  mutation: MutationType!
  node: TR
  updatedFields: [String!]
  previousValues: TRPreviousValues
}

input TRSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TRWhereInput
  AND: [TRSubscriptionWhereInput!]
  OR: [TRSubscriptionWhereInput!]
  NOT: [TRSubscriptionWhereInput!]
}

input TRUpdateInput {
  name_TR_UA: String
  name_TR_EN: String
  device_id: DeviceUpdateManyWithoutTrInput
}

input TRUpdateManyMutationInput {
  name_TR_UA: String
  name_TR_EN: String
}

input TRUpdateOneRequiredWithoutDevice_idInput {
  create: TRCreateWithoutDevice_idInput
  update: TRUpdateWithoutDevice_idDataInput
  upsert: TRUpsertWithoutDevice_idInput
  connect: TRWhereUniqueInput
}

input TRUpdateWithoutDevice_idDataInput {
  name_TR_UA: String
  name_TR_EN: String
}

input TRUpsertWithoutDevice_idInput {
  update: TRUpdateWithoutDevice_idDataInput!
  create: TRCreateWithoutDevice_idInput!
}

input TRWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name_TR_UA: String
  name_TR_UA_not: String
  name_TR_UA_in: [String!]
  name_TR_UA_not_in: [String!]
  name_TR_UA_lt: String
  name_TR_UA_lte: String
  name_TR_UA_gt: String
  name_TR_UA_gte: String
  name_TR_UA_contains: String
  name_TR_UA_not_contains: String
  name_TR_UA_starts_with: String
  name_TR_UA_not_starts_with: String
  name_TR_UA_ends_with: String
  name_TR_UA_not_ends_with: String
  name_TR_EN: String
  name_TR_EN_not: String
  name_TR_EN_in: [String!]
  name_TR_EN_not_in: [String!]
  name_TR_EN_lt: String
  name_TR_EN_lte: String
  name_TR_EN_gt: String
  name_TR_EN_gte: String
  name_TR_EN_contains: String
  name_TR_EN_not_contains: String
  name_TR_EN_starts_with: String
  name_TR_EN_not_starts_with: String
  name_TR_EN_ends_with: String
  name_TR_EN_not_ends_with: String
  device_id_every: DeviceWhereInput
  device_id_some: DeviceWhereInput
  device_id_none: DeviceWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TRWhereInput!]
  OR: [TRWhereInput!]
  NOT: [TRWhereInput!]
}

input TRWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  companyName: String
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  devices(where: DeviceWhereInput, orderBy: DeviceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Device!]
  role: Role!
  resetToken: String
  resetExpires: DateTime
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  name: String!
  companyName: String
  posts: PostCreateManyWithoutAuthorInput
  devices: DeviceCreateManyWithoutAuthorInput
  role: Role
  resetToken: String
  resetExpires: DateTime
}

input UserCreateOneWithoutDevicesInput {
  create: UserCreateWithoutDevicesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutDevicesInput {
  id: ID
  email: String!
  password: String!
  name: String!
  companyName: String
  posts: PostCreateManyWithoutAuthorInput
  role: Role
  resetToken: String
  resetExpires: DateTime
}

input UserCreateWithoutPostsInput {
  id: ID
  email: String!
  password: String!
  name: String!
  companyName: String
  devices: DeviceCreateManyWithoutAuthorInput
  role: Role
  resetToken: String
  resetExpires: DateTime
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  companyName_ASC
  companyName_DESC
  role_ASC
  role_DESC
  resetToken_ASC
  resetToken_DESC
  resetExpires_ASC
  resetExpires_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  companyName: String
  role: Role!
  resetToken: String
  resetExpires: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  companyName: String
  posts: PostUpdateManyWithoutAuthorInput
  devices: DeviceUpdateManyWithoutAuthorInput
  role: Role
  resetToken: String
  resetExpires: DateTime
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
  companyName: String
  role: Role
  resetToken: String
  resetExpires: DateTime
}

input UserUpdateOneRequiredWithoutDevicesInput {
  create: UserCreateWithoutDevicesInput
  update: UserUpdateWithoutDevicesDataInput
  upsert: UserUpsertWithoutDevicesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutDevicesDataInput {
  email: String
  password: String
  name: String
  companyName: String
  posts: PostUpdateManyWithoutAuthorInput
  role: Role
  resetToken: String
  resetExpires: DateTime
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
  companyName: String
  devices: DeviceUpdateManyWithoutAuthorInput
  role: Role
  resetToken: String
  resetExpires: DateTime
}

input UserUpsertWithoutDevicesInput {
  update: UserUpdateWithoutDevicesDataInput!
  create: UserCreateWithoutDevicesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  devices_every: DeviceWhereInput
  devices_some: DeviceWhereInput
  devices_none: DeviceWhereInput
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetExpires: DateTime
  resetExpires_not: DateTime
  resetExpires_in: [DateTime!]
  resetExpires_not_in: [DateTime!]
  resetExpires_lt: DateTime
  resetExpires_lte: DateTime
  resetExpires_gt: DateTime
  resetExpires_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`