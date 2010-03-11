
require.paths.unshift('spec', './spec/lib', 'lib')
require('jspec')
require('unit/spec.helper')
Class = require('oo').Class

JSpec
  .exec('spec/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
  .report()