import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum OrgaType {
  SOLO = "solo",
  TEAM = "team"
}

export enum OrgaRank {
  ADMIN = "admin",
  MOLDU = "moldu"
}



type EagerOrganisation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organisation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly orga_type?: OrgaType | keyof typeof OrgaType | null;
  readonly credits: number;
  readonly stripe_id?: string | null;
  readonly users_id?: (string | null)[] | null;
  readonly users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganisation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organisation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly orga_type?: OrgaType | keyof typeof OrgaType | null;
  readonly credits: number;
  readonly stripe_id?: string | null;
  readonly users_id?: (string | null)[] | null;
  readonly users: AsyncCollection<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organisation = LazyLoading extends LazyLoadingDisabled ? EagerOrganisation : LazyOrganisation

export declare const Organisation: (new (init: ModelInit<Organisation>) => Organisation) & {
  copyOf(source: Organisation, mutator: (draft: MutableModel<Organisation>) => MutableModel<Organisation> | void): Organisation;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pseudo: string;
  readonly email: string;
  readonly orga_id: string;
  readonly orga?: Organisation | null;
  readonly orga_rank?: OrgaRank | keyof typeof OrgaRank | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organisationUsersId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pseudo: string;
  readonly email: string;
  readonly orga_id: string;
  readonly orga: AsyncItem<Organisation | undefined>;
  readonly orga_rank?: OrgaRank | keyof typeof OrgaRank | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organisationUsersId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}