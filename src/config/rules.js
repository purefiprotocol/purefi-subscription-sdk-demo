const CONFIGURED_RULE_TYPES = {
  PUREFI_KYC1: 0,
  PUREFI_KYC2: 1,
  PUREFI_KYC3: 2,
  AML: 3,
};

const DEFAULT_RULE_TYPE_VALUES = {
  [CONFIGURED_RULE_TYPES.PUREFI_KYC1]: '776',
  [CONFIGURED_RULE_TYPES.PUREFI_KYC2]: '777',
  [CONFIGURED_RULE_TYPES.PUREFI_KYC3]: '778',
  [CONFIGURED_RULE_TYPES.AML]: '431050',
};

const RULE_TYPE_OPTIONS = [
  {
    label: 'PUREFI KYC (LVL 1)',
    value: CONFIGURED_RULE_TYPES.PUREFI_KYC1,
  },
  {
    label: 'PUREFI KYC (LVL 2)',
    value: CONFIGURED_RULE_TYPES.PUREFI_KYC2,
  },
  {
    label: 'AML',
    value: CONFIGURED_RULE_TYPES.AML,
  },
];

const DEFAULT_RULE_TYPE = CONFIGURED_RULE_TYPES.PUREFI_KYC1;

export {
  CONFIGURED_RULE_TYPES,
  DEFAULT_RULE_TYPE_VALUES,
  RULE_TYPE_OPTIONS,
  DEFAULT_RULE_TYPE,
};
