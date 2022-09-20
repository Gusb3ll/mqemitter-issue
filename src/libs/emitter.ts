import redis from 'mqemitter-redis'

//! Define emitter
export const mqemitter = redis({
  host: 'localhost',
  port: 6379,
  retryStrategy: (times) => { 
    return Math.min(times * 50, 2000)
  }
})