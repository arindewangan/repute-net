import { NearBindgen, near, call, view } from 'near-sdk-js'

@NearBindgen({})
class ReputationContract {
  constructor() {
    this.scores = new Map()
  }

  @call({})
  setReputationScore({ accountId, score }) {
    near.log(`Setting reputation score for ${accountId} to ${score}`)
    this.scores.set(accountId, score)
  }

  @view({})
  getReputationScore({ accountId }) {
    near.log(`Getting reputation score for ${accountId}`)
    return this.scores.get(accountId) || 0
  }
}