import { BigInt } from "@graphprotocol/graph-ts"
import {
  FYDai,
  Approval,
  Delegate,
  GrantedAccess,
  Matured,
  OwnershipTransferred,
  Redeemed,
  Transfer
} from "../generated/FYDai/FYDai"
import { _Approval, _Delegate, _GrantedAccess, _Matured,
  _OwnershipTransferred, _Redeemed, _Transfer } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new _Approval(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleDelegate(event: Delegate): void {
  let entity = _Delegate.load(event.params.user.toHex())

  if (entity == null) {
    entity = new _Delegate(event.params.user.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.user = event.params.user
  entity.delegate = event.params.delegate
  entity.enabled = event.params.enabled
  entity.save()
}

export function handleGrantedAccess(event: GrantedAccess): void {
  let entity = _GrantedAccess.load(event.params.access.toHex())

  if (entity == null) {
    entity = new _GrantedAccess(event.params.access.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.access = event.params.access
  entity.signature = event.params.signature
  entity.save()
}

export function handleMatured(event: Matured): void {
  let entity = _Matured.load(event.params.rate.toHex())

  if (entity == null) {
    entity = new _Matured(event.params.rate.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.rate = event.params.rate
  entity.chi = event.params.chi
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let entity = _OwnershipTransferred.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new _OwnershipTransferred(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleRedeemed(event: Redeemed): void {
  let entity = _Redeemed.load(event.params.from.toHex())

  if (entity == null) {
    entity = new _Redeemed(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.fyDaiIn = event.params.fyDaiIn
  entity.daiOut = event.params.daiOut
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.from.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
