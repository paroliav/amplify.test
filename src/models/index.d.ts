import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlacesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Places {
  readonly id: string;
  readonly name?: string;
  readonly location?: string;
  readonly state?: string;
  readonly country?: string;
  readonly description?: string;
  readonly photo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Places, PlacesMetaData>);
  static copyOf(source: Places, mutator: (draft: MutableModel<Places, PlacesMetaData>) => MutableModel<Places, PlacesMetaData> | void): Places;
}