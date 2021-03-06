// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BucketDetail extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BucketDetail entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BucketDetail entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BucketDetail", id.toString(), this);
  }

  static load(id: string): BucketDetail | null {
    return store.get("BucketDetail", id) as BucketDetail | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bucketId(): BigInt {
    let value = this.get("bucketId");
    return value.toBigInt();
  }

  set bucketId(value: BigInt) {
    this.set("bucketId", Value.fromBigInt(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get totalValue(): BigInt {
    let value = this.get("totalValue");
    return value.toBigInt();
  }

  set totalValue(value: BigInt) {
    this.set("totalValue", Value.fromBigInt(value));
  }

  get isEntry(): boolean {
    let value = this.get("isEntry");
    return value.toBoolean();
  }

  set isEntry(value: boolean) {
    this.set("isEntry", Value.fromBoolean(value));
  }
}
