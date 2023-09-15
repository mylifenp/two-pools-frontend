/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AddCemeteryInput = {
  address?: InputMaybe<AddressInput>;
  coordinates?: InputMaybe<CoordinatesInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  trustee: Scalars['ID']['input'];
};

export type AddTrusteeInput = {
  address?: InputMaybe<AddressInput>;
  bankDetails?: InputMaybe<Array<InputMaybe<BankDetailInput>>>;
  contacts?: InputMaybe<ContactsInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  houseNumber?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type BankDetail = {
  __typename?: 'BankDetail';
  bankName?: Maybe<Scalars['String']['output']>;
  bic?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
};

export type BankDetailInput = {
  bankName?: InputMaybe<Scalars['String']['input']>;
  bic?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
};

export type Cemetery = {
  __typename?: 'Cemetery';
  address?: Maybe<Address>;
  coordinates?: Maybe<Coordinates>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  trustee?: Maybe<Trustee>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Contacts = {
  __typename?: 'Contacts';
  emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  phones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ContactsInput = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type CoordinatesInput = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']['output']>;
  addCemetery?: Maybe<Cemetery>;
  addTrustee?: Maybe<Trustee>;
  updateTrustee?: Maybe<Trustee>;
};


export type MutationAddCemeteryArgs = {
  input: AddCemeteryInput;
};


export type MutationAddTrusteeArgs = {
  input: AddTrusteeInput;
};


export type MutationUpdateTrusteeArgs = {
  id: Scalars['ID']['input'];
  input: AddTrusteeInput;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']['output']>;
  cemetery?: Maybe<Cemetery>;
  test?: Maybe<Test>;
  trustee?: Maybe<Trustee>;
};


export type QueryCemeteryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTrusteeArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']['output']>;
  trusteeUpdated: TrusteeUpdated;
};

export type Test = {
  __typename?: 'Test';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Trustee = {
  __typename?: 'Trustee';
  address?: Maybe<Address>;
  bankDetails?: Maybe<Array<Maybe<BankDetail>>>;
  cemeteries?: Maybe<Array<Maybe<Cemetery>>>;
  contacts?: Maybe<Contacts>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type TrusteeUpdated = {
  __typename?: 'TrusteeUpdated';
  event: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  trustee: Trustee;
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', test?: { __typename?: 'Test', name?: string | null, email?: string | null } | null };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;