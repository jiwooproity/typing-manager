const UNIT_SIZE: { [key in UnitType]: string } = {
  "1u": "30px",
  "1.25u": "100px",
  "2u": "20px",
  "6.25u": "60px",
  "7u": "100px",
};

export function calcUnitSize(unit: UnitType = "1u"): string {
  return UNIT_SIZE[unit];
}
