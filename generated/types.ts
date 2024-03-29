import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Attachment = {
  __typename?: 'Attachment';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AttachmentInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type EmailSubscription = {
  __typename?: 'EmailSubscription';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type EmailSubscriptionInput = {
  email: Scalars['String']['input'];
};

export type Estimation = {
  __typename?: 'Estimation';
  unit?: Maybe<EstimationUnit>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type EstimationInput = {
  unit?: InputMaybe<EstimationUnit>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export enum EstimationUnit {
  DaysPerMonth = 'DAYS_PER_MONTH',
  DaysPerYear = 'DAYS_PER_YEAR',
  Flexible = 'FLEXIBLE',
  FullTime = 'FULL_TIME',
  HoursPerDay = 'HOURS_PER_DAY',
  HoursPerMonth = 'HOURS_PER_MONTH',
  HoursPerWeek = 'HOURS_PER_WEEK',
  PartTime = 'PART_TIME'
}

export enum ExperienceLevel {
  EntryLevel = 'ENTRY_LEVEL',
  Expert = 'EXPERT',
  Intermediate = 'INTERMEDIATE'
}

export type Health = {
  __typename?: 'Health';
  moreInfo?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']['output']>;
  addCategory: Category;
  addEmailSubscription: Result;
  addProject: Project;
  addSkill: Skill;
  deleteCategory: Category;
  deleteEmailSubscription: Result;
  deleteProject: Project;
  deleteSkill: Skill;
  health: Health;
  updateCategory: Category;
  updateProject: Project;
  updateSkill: Skill;
};


export type MutationAddCategoryArgs = {
  input: CategoryInput;
};


export type MutationAddEmailSubscriptionArgs = {
  input: EmailSubscriptionInput;
};


export type MutationAddProjectArgs = {
  input?: InputMaybe<ProjectInput>;
};


export type MutationAddSkillArgs = {
  input: SkillInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailSubscriptionArgs = {
  input: EmailSubscriptionInput;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID']['input'];
};


export type MutationHealthArgs = {
  status: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  input: CategoryInput;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ProjectInput>;
};


export type MutationUpdateSkillArgs = {
  id: Scalars['ID']['input'];
  input: SkillInput;
};

export type OrganizationRoles = {
  __typename?: 'OrganizationRoles';
  name?: Maybe<Scalars['String']['output']>;
  org_id?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Project = {
  __typename?: 'Project';
  attachments: Array<Maybe<Attachment>>;
  categories: Array<Maybe<Category>>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  estimation: Estimation;
  experience_level: ExperienceLevel;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  required_skills: Array<Skill>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type ProjectInput = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimation?: InputMaybe<EstimationInput>;
  experience_level?: InputMaybe<ExperienceLevel>;
  location?: InputMaybe<Scalars['String']['input']>;
  required_skills?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  DBHealth: Health;
  RedisHealth: Health;
  _?: Maybe<Scalars['Boolean']['output']>;
  categories: Array<Category>;
  category: Category;
  health: Health;
  isEmailSubscribed: Result;
  project: Project;
  projects: Array<Project>;
  skill: Skill;
  skills: Array<Skill>;
  suggestCategories: Array<Maybe<Category>>;
  suggestSkills: Array<Maybe<Skill>>;
  userInfo: User;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIsEmailSubscribedArgs = {
  input: EmailSubscriptionInput;
};


export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySkillArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySuggestCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QuerySuggestSkillsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Result = {
  __typename?: 'Result';
  message: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type Skill = {
  __typename?: 'Skill';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type SkillInput = {
  name: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']['output']>;
  categoryAdded: Category;
  categoryDeleted: Category;
  categoryUpdated: Category;
  health?: Maybe<Health>;
  projectAdded: Project;
  projectDeleted: Project;
  projectUpdated: Project;
  skillAdded: Skill;
  skillDeleted: Skill;
  skillUpdated: Skill;
};


export type SubscriptionProjectDeletedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionProjectUpdatedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionSkillUpdatedArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  family_name?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  org_roles?: Maybe<Array<Maybe<OrganizationRoles>>>;
  organization?: Maybe<Scalars['String']['output']>;
  preferred_username?: Maybe<Scalars['String']['output']>;
};

export type CategoryFragment = { __typename?: 'Category', createdAt: any, id: string, name: string, updatedAt: any };

export type ProjectInfoPartFragment = { __typename?: 'Project', id: string, title: string, createdAt: any };

export type NewSkillFragment = { __typename?: 'Skill', id: string, name: string };

export type AddCategoryMutationVariables = Exact<{
  input: CategoryInput;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'Category', createdAt: any, id: string, name: string, updatedAt: any } };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: CategoryInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Category', createdAt: any, id: string, name: string, updatedAt: any } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'Category', createdAt: any, id: string, name: string, updatedAt: any } };

export type AddProjectMutationVariables = Exact<{
  input?: InputMaybe<ProjectInput>;
}>;


export type AddProjectMutation = { __typename?: 'Mutation', addProject: { __typename?: 'Project', id: string, title: string, createdAt: any, attachments: Array<{ __typename?: 'Attachment', name?: string | null, url?: string | null } | null> } };

export type AddSkillMutationVariables = Exact<{
  input: SkillInput;
}>;


export type AddSkillMutation = { __typename?: 'Mutation', addSkill: { __typename?: 'Skill', id: string, name: string } };

export type UpdateSkillMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: SkillInput;
}>;


export type UpdateSkillMutation = { __typename?: 'Mutation', updateSkill: { __typename?: 'Skill', id: string, name: string } };

export type DeleteSkillMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteSkillMutation = { __typename?: 'Mutation', deleteSkill: { __typename?: 'Skill', id: string, name: string } };

export type AddEmailSubscriptionMutationVariables = Exact<{
  input: EmailSubscriptionInput;
}>;


export type AddEmailSubscriptionMutation = { __typename?: 'Mutation', addEmailSubscription: { __typename?: 'Result', status: boolean, message: string } };

export type DeleteEmailSubscriptionMutationVariables = Exact<{
  input: EmailSubscriptionInput;
}>;


export type DeleteEmailSubscriptionMutation = { __typename?: 'Mutation', deleteEmailSubscription: { __typename?: 'Result', status: boolean, message: string } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', createdAt: any, id: string, name: string, updatedAt: any }> };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', createdAt: any, id: string, name: string, updatedAt: any } };

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, title: string, createdAt: any, attachments: Array<{ __typename?: 'Attachment', name?: string | null, url?: string | null } | null> }> };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: string, name: string, createdAt: any, updatedAt: any }> };

export type IsEmailSubscribedQueryVariables = Exact<{
  input: EmailSubscriptionInput;
}>;


export type IsEmailSubscribedQuery = { __typename?: 'Query', isEmailSubscribed: { __typename?: 'Result', status: boolean, message: string } };

export type SkillAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SkillAddedSubscription = { __typename?: 'Subscription', skillAdded: { __typename?: 'Skill', id: string, name: string, createdAt: any, updatedAt: any } };

export type SkillDeletedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SkillDeletedSubscription = { __typename?: 'Subscription', skillDeleted: { __typename?: 'Skill', id: string, name: string, createdAt: any, updatedAt: any } };

export type SkillUpdatedSubscriptionVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SkillUpdatedSubscription = { __typename?: 'Subscription', skillUpdated: { __typename?: 'Skill', id: string, name: string, createdAt: any, updatedAt: any } };

export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  createdAt
  id
  name
  updatedAt
}
    `;
export const ProjectInfoPartFragmentDoc = gql`
    fragment ProjectInfoPart on Project {
  id
  title
  createdAt
}
    `;
export const NewSkillFragmentDoc = gql`
    fragment NewSkill on Skill {
  id
  name
}
    `;
export const AddCategoryDocument = gql`
    mutation AddCategory($input: CategoryInput!) {
  addCategory(input: $input) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: ID!, $input: CategoryInput!) {
  updateCategory(id: $id, input: $input) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: ID!) {
  deleteCategory(id: $id) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const AddProjectDocument = gql`
    mutation AddProject($input: ProjectInput) {
  addProject(input: $input) {
    ...ProjectInfoPart
    attachments {
      name
      url
    }
  }
}
    ${ProjectInfoPartFragmentDoc}`;
export type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument, options);
      }
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;
export const AddSkillDocument = gql`
    mutation addSkill($input: SkillInput!) {
  addSkill(input: $input) {
    id
    name
  }
}
    `;
export type AddSkillMutationFn = Apollo.MutationFunction<AddSkillMutation, AddSkillMutationVariables>;

/**
 * __useAddSkillMutation__
 *
 * To run a mutation, you first call `useAddSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSkillMutation, { data, loading, error }] = useAddSkillMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddSkillMutation(baseOptions?: Apollo.MutationHookOptions<AddSkillMutation, AddSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSkillMutation, AddSkillMutationVariables>(AddSkillDocument, options);
      }
export type AddSkillMutationHookResult = ReturnType<typeof useAddSkillMutation>;
export type AddSkillMutationResult = Apollo.MutationResult<AddSkillMutation>;
export type AddSkillMutationOptions = Apollo.BaseMutationOptions<AddSkillMutation, AddSkillMutationVariables>;
export const UpdateSkillDocument = gql`
    mutation updateSkill($id: ID!, $input: SkillInput!) {
  updateSkill(id: $id, input: $input) {
    id
    name
  }
}
    `;
export type UpdateSkillMutationFn = Apollo.MutationFunction<UpdateSkillMutation, UpdateSkillMutationVariables>;

/**
 * __useUpdateSkillMutation__
 *
 * To run a mutation, you first call `useUpdateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSkillMutation, { data, loading, error }] = useUpdateSkillMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSkillMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSkillMutation, UpdateSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSkillMutation, UpdateSkillMutationVariables>(UpdateSkillDocument, options);
      }
export type UpdateSkillMutationHookResult = ReturnType<typeof useUpdateSkillMutation>;
export type UpdateSkillMutationResult = Apollo.MutationResult<UpdateSkillMutation>;
export type UpdateSkillMutationOptions = Apollo.BaseMutationOptions<UpdateSkillMutation, UpdateSkillMutationVariables>;
export const DeleteSkillDocument = gql`
    mutation deleteSkill($id: ID!) {
  deleteSkill(id: $id) {
    id
    name
  }
}
    `;
export type DeleteSkillMutationFn = Apollo.MutationFunction<DeleteSkillMutation, DeleteSkillMutationVariables>;

/**
 * __useDeleteSkillMutation__
 *
 * To run a mutation, you first call `useDeleteSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSkillMutation, { data, loading, error }] = useDeleteSkillMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSkillMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSkillMutation, DeleteSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSkillMutation, DeleteSkillMutationVariables>(DeleteSkillDocument, options);
      }
export type DeleteSkillMutationHookResult = ReturnType<typeof useDeleteSkillMutation>;
export type DeleteSkillMutationResult = Apollo.MutationResult<DeleteSkillMutation>;
export type DeleteSkillMutationOptions = Apollo.BaseMutationOptions<DeleteSkillMutation, DeleteSkillMutationVariables>;
export const AddEmailSubscriptionDocument = gql`
    mutation AddEmailSubscription($input: EmailSubscriptionInput!) {
  addEmailSubscription(input: $input) {
    status
    message
  }
}
    `;
export type AddEmailSubscriptionMutationFn = Apollo.MutationFunction<AddEmailSubscriptionMutation, AddEmailSubscriptionMutationVariables>;

/**
 * __useAddEmailSubscriptionMutation__
 *
 * To run a mutation, you first call `useAddEmailSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEmailSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEmailSubscriptionMutation, { data, loading, error }] = useAddEmailSubscriptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddEmailSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<AddEmailSubscriptionMutation, AddEmailSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddEmailSubscriptionMutation, AddEmailSubscriptionMutationVariables>(AddEmailSubscriptionDocument, options);
      }
export type AddEmailSubscriptionMutationHookResult = ReturnType<typeof useAddEmailSubscriptionMutation>;
export type AddEmailSubscriptionMutationResult = Apollo.MutationResult<AddEmailSubscriptionMutation>;
export type AddEmailSubscriptionMutationOptions = Apollo.BaseMutationOptions<AddEmailSubscriptionMutation, AddEmailSubscriptionMutationVariables>;
export const DeleteEmailSubscriptionDocument = gql`
    mutation DeleteEmailSubscription($input: EmailSubscriptionInput!) {
  deleteEmailSubscription(input: $input) {
    status
    message
  }
}
    `;
export type DeleteEmailSubscriptionMutationFn = Apollo.MutationFunction<DeleteEmailSubscriptionMutation, DeleteEmailSubscriptionMutationVariables>;

/**
 * __useDeleteEmailSubscriptionMutation__
 *
 * To run a mutation, you first call `useDeleteEmailSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmailSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmailSubscriptionMutation, { data, loading, error }] = useDeleteEmailSubscriptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteEmailSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEmailSubscriptionMutation, DeleteEmailSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEmailSubscriptionMutation, DeleteEmailSubscriptionMutationVariables>(DeleteEmailSubscriptionDocument, options);
      }
export type DeleteEmailSubscriptionMutationHookResult = ReturnType<typeof useDeleteEmailSubscriptionMutation>;
export type DeleteEmailSubscriptionMutationResult = Apollo.MutationResult<DeleteEmailSubscriptionMutation>;
export type DeleteEmailSubscriptionMutationOptions = Apollo.BaseMutationOptions<DeleteEmailSubscriptionMutation, DeleteEmailSubscriptionMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryDocument = gql`
    query GetCategory($id: ID!) {
  category(id: $id) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetProjectsDocument = gql`
    query GetProjects {
  projects {
    ...ProjectInfoPart
    attachments {
      name
      url
    }
  }
}
    ${ProjectInfoPartFragmentDoc}`;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetSkillsDocument = gql`
    query GetSkills {
  skills {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetSkillsQuery__
 *
 * To run a query within a React component, call `useGetSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSkillsQuery(baseOptions?: Apollo.QueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
      }
export function useGetSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
        }
export type GetSkillsQueryHookResult = ReturnType<typeof useGetSkillsQuery>;
export type GetSkillsLazyQueryHookResult = ReturnType<typeof useGetSkillsLazyQuery>;
export type GetSkillsQueryResult = Apollo.QueryResult<GetSkillsQuery, GetSkillsQueryVariables>;
export const IsEmailSubscribedDocument = gql`
    query IsEmailSubscribed($input: EmailSubscriptionInput!) {
  isEmailSubscribed(input: $input) {
    status
    message
  }
}
    `;

/**
 * __useIsEmailSubscribedQuery__
 *
 * To run a query within a React component, call `useIsEmailSubscribedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsEmailSubscribedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsEmailSubscribedQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIsEmailSubscribedQuery(baseOptions: Apollo.QueryHookOptions<IsEmailSubscribedQuery, IsEmailSubscribedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsEmailSubscribedQuery, IsEmailSubscribedQueryVariables>(IsEmailSubscribedDocument, options);
      }
export function useIsEmailSubscribedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsEmailSubscribedQuery, IsEmailSubscribedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsEmailSubscribedQuery, IsEmailSubscribedQueryVariables>(IsEmailSubscribedDocument, options);
        }
export type IsEmailSubscribedQueryHookResult = ReturnType<typeof useIsEmailSubscribedQuery>;
export type IsEmailSubscribedLazyQueryHookResult = ReturnType<typeof useIsEmailSubscribedLazyQuery>;
export type IsEmailSubscribedQueryResult = Apollo.QueryResult<IsEmailSubscribedQuery, IsEmailSubscribedQueryVariables>;
export const SkillAddedDocument = gql`
    subscription SkillAdded {
  skillAdded {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSkillAddedSubscription__
 *
 * To run a query within a React component, call `useSkillAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSkillAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSkillAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SkillAddedSubscription, SkillAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SkillAddedSubscription, SkillAddedSubscriptionVariables>(SkillAddedDocument, options);
      }
export type SkillAddedSubscriptionHookResult = ReturnType<typeof useSkillAddedSubscription>;
export type SkillAddedSubscriptionResult = Apollo.SubscriptionResult<SkillAddedSubscription>;
export const SkillDeletedDocument = gql`
    subscription SkillDeleted {
  skillDeleted {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSkillDeletedSubscription__
 *
 * To run a query within a React component, call `useSkillDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSkillDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillDeletedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSkillDeletedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SkillDeletedSubscription, SkillDeletedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SkillDeletedSubscription, SkillDeletedSubscriptionVariables>(SkillDeletedDocument, options);
      }
export type SkillDeletedSubscriptionHookResult = ReturnType<typeof useSkillDeletedSubscription>;
export type SkillDeletedSubscriptionResult = Apollo.SubscriptionResult<SkillDeletedSubscription>;
export const SkillUpdatedDocument = gql`
    subscription SkillUpdated($id: ID!) {
  skillUpdated(id: $id) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSkillUpdatedSubscription__
 *
 * To run a query within a React component, call `useSkillUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSkillUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillUpdatedSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSkillUpdatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<SkillUpdatedSubscription, SkillUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SkillUpdatedSubscription, SkillUpdatedSubscriptionVariables>(SkillUpdatedDocument, options);
      }
export type SkillUpdatedSubscriptionHookResult = ReturnType<typeof useSkillUpdatedSubscription>;
export type SkillUpdatedSubscriptionResult = Apollo.SubscriptionResult<SkillUpdatedSubscription>;