/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
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
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
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
  addProject: Project;
  addSkill: Skill;
  deleteCategory: Category;
  deleteProject: Project;
  deleteSkill: Skill;
  health: Health;
  updateCategory: Category;
  updateProject: Project;
  updateSkill: Skill;
};


export type MutationAddCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddProjectArgs = {
  input?: InputMaybe<ProjectInput>;
};


export type MutationAddSkillArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
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
  name: Scalars['String']['input'];
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ProjectInput>;
};


export type MutationUpdateSkillArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
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

export type Skill = {
  __typename?: 'Skill';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
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

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, title: string }> };


export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;
export type AttachmentKeySpecifier = ('name' | 'url' | AttachmentKeySpecifier)[];
export type AttachmentFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EstimationKeySpecifier = ('unit' | 'value' | EstimationKeySpecifier)[];
export type EstimationFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HealthKeySpecifier = ('moreInfo' | 'status' | HealthKeySpecifier)[];
export type HealthFieldPolicy = {
	moreInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('_' | 'addCategory' | 'addProject' | 'addSkill' | 'deleteCategory' | 'deleteProject' | 'deleteSkill' | 'health' | 'updateCategory' | 'updateProject' | 'updateSkill' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	addCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	addProject?: FieldPolicy<any> | FieldReadFunction<any>,
	addSkill?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProject?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSkill?: FieldPolicy<any> | FieldReadFunction<any>,
	health?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProject?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSkill?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationRolesKeySpecifier = ('name' | 'org_id' | 'roles' | OrganizationRolesKeySpecifier)[];
export type OrganizationRolesFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('attachments' | 'categories' | 'createdAt' | 'description' | 'estimation' | 'experience_level' | 'id' | 'location' | 'required_skills' | 'title' | 'updatedAt' | 'user' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	estimation?: FieldPolicy<any> | FieldReadFunction<any>,
	experience_level?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	required_skills?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('DBHealth' | 'RedisHealth' | '_' | 'categories' | 'category' | 'health' | 'project' | 'projects' | 'skill' | 'skills' | 'suggestCategories' | 'suggestSkills' | 'userInfo' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	DBHealth?: FieldPolicy<any> | FieldReadFunction<any>,
	RedisHealth?: FieldPolicy<any> | FieldReadFunction<any>,
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	health?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	skill?: FieldPolicy<any> | FieldReadFunction<any>,
	skills?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestSkills?: FieldPolicy<any> | FieldReadFunction<any>,
	userInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SkillKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | SkillKeySpecifier)[];
export type SkillFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('_' | 'categoryAdded' | 'categoryDeleted' | 'categoryUpdated' | 'health' | 'projectAdded' | 'projectDeleted' | 'projectUpdated' | 'skillAdded' | 'skillDeleted' | 'skillUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	_?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryAdded?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	health?: FieldPolicy<any> | FieldReadFunction<any>,
	projectAdded?: FieldPolicy<any> | FieldReadFunction<any>,
	projectDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	projectUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	skillAdded?: FieldPolicy<any> | FieldReadFunction<any>,
	skillDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	skillUpdated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'family_name' | 'given_name' | 'id' | 'name' | 'org_roles' | 'organization' | 'preferred_username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	family_name?: FieldPolicy<any> | FieldReadFunction<any>,
	given_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	org_roles?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	preferred_username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Attachment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttachmentKeySpecifier | (() => undefined | AttachmentKeySpecifier),
		fields?: AttachmentFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	Estimation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EstimationKeySpecifier | (() => undefined | EstimationKeySpecifier),
		fields?: EstimationFieldPolicy,
	},
	Health?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HealthKeySpecifier | (() => undefined | HealthKeySpecifier),
		fields?: HealthFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	OrganizationRoles?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationRolesKeySpecifier | (() => undefined | OrganizationRolesKeySpecifier),
		fields?: OrganizationRolesFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Skill?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SkillKeySpecifier | (() => undefined | SkillKeySpecifier),
		fields?: SkillFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, title: string }> };


export const ProjectsDocument = gql`
    query Projects {
  projects {
    id
    title
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;