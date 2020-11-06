import { BigInt } from "@graphprotocol/graph-ts"
import { BucketSale, Entered, Exited } from "../generated/BucketSale/BucketSale"
import { BucketDetail } from "../generated/schema"

export function handleEntered(event: Entered): void {

  let bucketDetail = new BucketDetail(event.transaction.hash.toHex())

  bucketDetail.bucketId = event.params._bucketId
  bucketDetail.bidder = event.params._sender
  bucketDetail.totalValue = event.params._valueEntered
  bucketDetail.isEntry = true

  bucketDetail.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.bucketCount(...)
  // - contract.bucketPeriod(...)
  // - contract.bucketSupply(...)
  // - contract.buckets(...)
  // - contract.buyerReferralRewardPerc(...)
  // - contract.buys(...)
  // - contract.calculateExitableTokens(...)
  // - contract.currentBucket(...)
  // - contract.referredTotal(...)
  // - contract.referrerReferralRewardPerc(...)
  // - contract.startOfSale(...)
  // - contract.termsAndConditions(...)
  // - contract.tokenOnSale(...)
  // - contract.tokenSoldFor(...)
  // - contract.totalExitedTokens(...)
  // - contract.treasury(...)
}

export function handleExited(event: Exited): void {

  let bucketDetail = new BucketDetail(event.transaction.hash.toHex())

  bucketDetail.bucketId = event.params._bucketId
  bucketDetail.bidder = event.params._buyer
  bucketDetail.totalValue = event.params._tokensExited
  bucketDetail.isEntry = false

  bucketDetail.save();
}
