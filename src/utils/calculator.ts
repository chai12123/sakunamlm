/**
 * คำนวณรายได้ประมาณการจากจำนวนชั่วโมงและคนที่ชวนได้
 * @param hoursPerWeek ชั่วโมงทำงานต่อสัปดาห์
 * @param recruitsPerMonth คนที่ชวนได้ต่อเดือน
 * @returns [รายได้เดือนที่ 6, รายได้เดือนที่ 12]
 */
export function calculateIncome(hoursPerWeek: number, recruitsPerMonth: number): [number, number] {
  // TODO: เปลี่ยนสูตรการคำนวณรายได้นี้ให้ตรงกับแผนธุรกิจที่ใช้งานจริงของ Uni
  // นี่คือสูตรจำลองเพื่อแสดงให้เห็นการเปลี่ยนแปลงของตัวเลข
  const baseEffort = (hoursPerWeek * 150) + (recruitsPerMonth * 2500);
  
  // เดือนที่ 6 ประมาณการจากการเติบโตก้าวแรก
  const month6 = Math.round(baseEffort * 2.5);
  
  // เดือนที่ 12 ให้ Exponential แตะ 200K ได้เมื่อชวนคนเยอะและทำเวลาเยอะ (เช่น 20 คน * 40 ชม)
  const month12 = Math.round(baseEffort * Math.min(8.5 + (recruitsPerMonth * 0.1), 12));
  
  return [month6, month12];
}
