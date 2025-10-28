export default function Page() {
return (
<div className="min-h-screen bg-pink-100 flex items-center justify-center p-6">

<div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-xl w-full border border-pink-300">

<h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-sm mb-4 tracking-tight">
Payroll App
</h1>

<h2 className="text-xl font-medium text-gray-600 mb-3">
Part 1 – Final Project
</h2>

<p className="text-lg text-gray-700 mb-8">
Manage time and shifts with style 🚀
</p>

{/* Tu nombre personalizado */}
<p className="text-lg font-bold text-pink-700 mb-10">
Designed by <span className="text-gray-900">Katherin Giraldo</span>
</p>

<button className="bg-gray-900 hover:bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
Clock In ⏱️
</button>

</div>

</div>
);
}
