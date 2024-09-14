import express from "express";

const app = express();

app.use(express.json());

const items = [
  { name: "Mie Ayam", price: 12000 },
  { name: "Bakso", price: 15000 },
  { name: "Ayam Goreng", price: 20000 },
  { name: "Ayam Bakar", price: 20000 },
  { name: "Nasi Goreng", price: 15000 },
  { name: "Mie Goreng", price: 12000 },
  { name: "Mie Rebus", price: 12000 },
  { name: "Es Teh", price: 6000 },
  { name: "Es Jeruk", price: 6000 },
  { name: "Es Buah", price: 10000 },
  { name: "Teh Anget", price: 5000 },
  { name: "Jeruk Anget", price: 5000 },
  { name: "Es Soda Sedih", price: 10000 },
];

const calculateTotal = (selectedItems) => {
  let total = 0;
  selectedItems.forEach((item) => {
    const foundItem = items.find(
      (i) => i.name.toLowerCase() === item.toLowerCase()
    );
    if (foundItem) total += foundItem.price;
  });
  return total;
};

app.get("/", (req, res) => {
  res.status(200).json({
    Judul: "LIST MAKANAN KAMI: ",
    menu: [
      { name: "Mie Ayam", price: 12000 },
      { name: "Bakso", price: 15000 },
      { name: "Ayam Goreng", price: 20000 },
      { name: "Ayam Bakar", price: 20000 },
      { name: "Nasi Goreng", price: 15000 },
      { name: "Mie Goreng", price: 12000 },
      { name: "Mie Rebus", price: 12000 },
      { name: "Es Teh", price: 6000 },
      { name: "Es Jeruk", price: 6000 },
      { name: "Es Buah", price: 10000 },
      { name: "Teh Anget", price: 5000 },
      { name: "Jeruk Anget", price: 5000 },
      { name: "Es Soda Sedih", price: 10000 },
    ],
  });
});

app.post("/checkout", (req, res) => {
  const { selectedItems = [], isMember, payment } = req.body;

  // selectedItems harus array!!!
  if (!Array.isArray(selectedItems)) {
    return res.status(400).json({ error: "nilai selectedItems harus array" });
  }

  let totalBelanja = calculateTotal(selectedItems);
  let discount = 0;

  if (isMember) {
    discount = totalBelanja * 0.1;
  }

  if (totalBelanja >= 100000) {
    discount = totalBelanja * 0.3;
  }

  const totalSetelahDiskon = totalBelanja - discount;
  const kembalian = payment - totalSetelahDiskon;

  return res.json({
    totalBelanja,
    totalDiskon: discount,
    totalSetelahDiskon,
    payment,
    kembalian,
  });
});

export default app;
