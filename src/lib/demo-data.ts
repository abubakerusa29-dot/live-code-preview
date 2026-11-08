// Design-preview sample data only. Real data will come from the business's Supabase project later.
export const business = { name: "Rehman Traders", owner: "Abubaker" };

export const kpis = [
  { label: "Today's sales", value: "Rs 184,500", change: "+12% vs yesterday", tone: "success" as const },
  { label: "Cash received", value: "Rs 126,200", change: "38 payments", tone: "neutral" as const },
  { label: "Customer credit due", value: "Rs 412,750", change: "17 customers", tone: "warning" as const },
  { label: "Low stock items", value: "9", change: "Reorder needed", tone: "danger" as const },
];

export const weeklySales = [
  { day: "Mon", value: 142 }, { day: "Tue", value: 168 }, { day: "Wed", value: 121 },
  { day: "Thu", value: 190 }, { day: "Fri", value: 205 }, { day: "Sat", value: 232 }, { day: "Sun", value: 184 },
];

export const invoices = [
  { no: "INV-1042", customer: "Al-Madina Store", date: "08 Nov", amount: 24500, status: "Paid" },
  { no: "INV-1041", customer: "Karachi Wholesale", date: "08 Nov", amount: 68200, status: "Credit" },
  { no: "INV-1040", customer: "Bismillah Mart", date: "07 Nov", amount: 12350, status: "Paid" },
  { no: "INV-1039", customer: "City Pharmacy", date: "07 Nov", amount: 9800, status: "Partial" },
  { no: "INV-1038", customer: "Hassan General Store", date: "06 Nov", amount: 31400, status: "Paid" },
  { no: "INV-1037", customer: "Faisal Brothers", date: "06 Nov", amount: 54000, status: "Credit" },
];

export const products = [
  { sku: "RC-5KG", name: "Basmati Rice 5kg", brand: "Guard", category: "Grocery", price: 2150, stock: 84, reorder: 20 },
  { sku: "OL-1L", name: "Cooking Oil 1L", brand: "Dalda", category: "Grocery", price: 640, stock: 12, reorder: 30 },
  { sku: "TE-950", name: "Tea 950g", brand: "Tapal", category: "Beverages", price: 1480, stock: 46, reorder: 15 },
  { sku: "SG-1KG", name: "Sugar 1kg", brand: "Local", category: "Grocery", price: 155, stock: 7, reorder: 50 },
  { sku: "SP-6P", name: "Soap 6-pack", brand: "Lux", category: "Personal care", price: 720, stock: 63, reorder: 20 },
  { sku: "DT-1KG", name: "Detergent 1kg", brand: "Surf Excel", category: "Household", price: 590, stock: 18, reorder: 25 },
  { sku: "MK-1L", name: "Milk 1L", brand: "Olpers", category: "Dairy", price: 290, stock: 120, reorder: 40 },
];

export const customers = [
  { name: "Karachi Wholesale", phone: "0300-1234567", city: "Karachi", balance: 168200, limit: 250000 },
  { name: "Faisal Brothers", phone: "0321-7654321", city: "Lahore", balance: 94000, limit: 100000 },
  { name: "Al-Madina Store", phone: "0333-1112223", city: "Karachi", balance: 0, limit: 50000 },
  { name: "City Pharmacy", phone: "0345-9988776", city: "Hyderabad", balance: 9800, limit: 40000 },
  { name: "Bismillah Mart", phone: "0312-5566778", city: "Karachi", balance: 22100, limit: 60000 },
];

export const suppliers = [
  { name: "Guard Rice Mills", phone: "042-111-222", payable: 312000, lastPurchase: "05 Nov" },
  { name: "Dalda Foods", phone: "021-333-444", payable: 145500, lastPurchase: "03 Nov" },
  { name: "Unilever Distributor", phone: "021-555-666", payable: 0, lastPurchase: "29 Oct" },
];

export const purchases = [
  { no: "PO-311", supplier: "Guard Rice Mills", date: "05 Nov", amount: 212000, status: "Received" },
  { no: "PO-310", supplier: "Dalda Foods", date: "03 Nov", amount: 145500, status: "Pending" },
  { no: "PO-309", supplier: "Unilever Distributor", date: "29 Oct", amount: 88300, status: "Received" },
];

export const expenses = [
  { title: "Shop rent", category: "Rent", date: "01 Nov", amount: 85000 },
  { title: "Electricity bill", category: "Utilities", date: "04 Nov", amount: 23400 },
  { title: "Delivery fuel", category: "Transport", date: "07 Nov", amount: 6200 },
  { title: "Staff tea", category: "Misc", date: "08 Nov", amount: 900 },
];

export const team = [
  { name: "Imran Ali", role: "Salesman", visits: 14, target: 78, status: "On route" },
  { name: "Usman Khan", role: "Salesman", visits: 9, target: 54, status: "On route" },
  { name: "Sana Tariq", role: "Supervisor", visits: 6, target: 91, status: "In office" },
  { name: "Bilal Ahmed", role: "Salesman", visits: 0, target: 22, status: "On leave" },
];

export const visits = [
  { shop: "Al-Madina Store", area: "Saddar", time: "10:30 AM", result: "Order taken" },
  { shop: "City Pharmacy", area: "Clifton", time: "11:45 AM", result: "Payment collected" },
  { shop: "Hassan General Store", area: "Gulshan", time: "01:15 PM", result: "Pending" },
  { shop: "Bismillah Mart", area: "Nazimabad", time: "03:00 PM", result: "Pending" },
];

export const rs = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;
