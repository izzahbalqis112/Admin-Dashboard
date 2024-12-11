import React, { useEffect, useState } from 'react';
import './App.css';

const Header = () => (
  <header className="fixed top-0 left-0 flex items-center justify-center w-full h-16 text-white shadow-md bg-dark-pink z-1000">
    <h1 className="text-lg font-bold">Admin Dashboard</h1>
  </header>
);

const Counter = ({ endValue }: { endValue: number }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(endValue / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setValue(start);
    }, 30);
    return () => clearInterval(timer);
  }, [endValue]);

  return <span>{value}</span>;
};

const App: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', email: 'alice@example.com', status: 'Active' },
    { id: 2, name: 'Bob', email: 'bob@example.com', status: 'Inactive' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', status: 'Active' },
    { id: 4, name: 'David', email: 'david@example.com', status: 'Inactive' },
    { id: 5, name: 'Eva', email: 'eva@example.com', status: 'Active' },
    { id: 6, name: 'Frank', email: 'frank@example.com', status: 'Inactive' },
    { id: 7, name: 'Grace', email: 'grace@example.com', status: 'Active' },
    { id: 8, name: 'Hannah', email: 'hannah@example.com', status: 'Inactive' },
    { id: 9, name: 'Ivy', email: 'ivy@example.com', status: 'Active' },
    { id: 10, name: 'Jack', email: 'jack@example.com', status: 'Inactive' },
    { id: 11, name: 'Kara', email: 'kara@example.com', status: 'Active' },
    { id: 12, name: 'Liam', email: 'liam@example.com', status: 'Inactive' },
    { id: 13, name: 'Mason', email: 'mason@example.com', status: 'Active' },
    { id: 14, name: 'Nina', email: 'nina@example.com', status: 'Inactive' },
    { id: 15, name: 'Oscar', email: 'oscar@example.com', status: 'Active' },
    { id: 16, name: 'Paula', email: 'paula@example.com', status: 'Inactive' },
    { id: 17, name: 'Quinn', email: 'quinn@example.com', status: 'Active' },
    { id: 18, name: 'Riley', email: 'riley@example.com', status: 'Inactive' },
    { id: 19, name: 'Sophie', email: 'sophie@example.com', status: 'Active' },
    { id: 20, name: 'Tom', email: 'tom@example.com', status: 'Inactive' },
    { id: 21, name: 'Ursula', email: 'ursula@example.com', status: 'Active' },
    { id: 22, name: 'Vera', email: 'vera@example.com', status: 'Inactive' },
    { id: 23, name: 'Will', email: 'will@example.com', status: 'Active' },
    { id: 24, name: 'Xander', email: 'xander@example.com', status: 'Inactive' },
    { id: 25, name: 'Yara', email: 'yara@example.com', status: 'Active' },
    { id: 26, name: 'Zane', email: 'zane@example.com', status: 'Inactive' },
  ]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const sortTable = () => {
    const sortedUsers = [...users];
    if (sortOrder === 'asc') {
      sortedUsers.sort((a, b) => b.name.localeCompare(a.name));
      setSortOrder('desc');
    } else {
      sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
      setSortOrder('asc');
    }
    setUsers(sortedUsers);
  };

  const toggleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 pt-24 space-y-8">
        <section className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-3">
          <div className="relative p-6 transition-all duration-500 transform border-2 shadow-xl bg-gradient-to-br from-white to-soft-pink border-dark-pink rounded-xl hover:scale-105 hover:opacity-90 hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-4 h-full bg-dark-pink animate-slide-in"></div>
            <div className="flex items-center justify-center mb-4">
              <i className="text-6xl text-dark-pink fas fa-users"></i>
            </div>
            <h2 className="mb-2 text-lg font-semibold text-center text-dark-pink">Total Users</h2>
            <p className="text-5xl font-bold text-center text-gray-900">
              <Counter endValue={150} />
            </p>
            <div className="w-full h-1 mt-4 bg-gradient-to-r from-dark-pink to-soft-pink animate-progress"></div>
          </div>

          <div className="relative p-6 transition-all duration-500 transform border-2 shadow-xl bg-gradient-to-br from-white to-soft-pink border-dark-pink rounded-xl hover:scale-105 hover:opacity-90 hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-4 h-full bg-dark-pink animate-slide-in"></div>
            <div className="flex items-center justify-center mb-4">
              <i className="text-6xl text-dark-pink fas fa-dollar-sign"></i>
            </div>
            <h2 className="mb-2 text-lg font-semibold text-center text-dark-pink">Total Sales</h2>
            <p className="text-5xl font-bold text-center text-gray-900">
              RM<Counter endValue={12345} />
            </p>
            <div className="w-full h-1 mt-4 bg-gradient-to-r from-dark-pink to-soft-pink animate-progress"></div>
          </div>

          <div className="relative p-6 transition-all duration-500 transform border-2 shadow-xl bg-gradient-to-br from-white to-soft-pink border-dark-pink rounded-xl hover:scale-105 hover:opacity-90 hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-4 h-full bg-dark-pink animate-slide-in"></div>
            <div className="flex items-center justify-center mb-4">
              <i className="text-6xl text-dark-pink fas fa-money-bill-wave"></i>
            </div>
            <h2 className="mb-2 text-lg font-semibold text-center text-dark-pink">Revenue</h2>
            <p className="text-5xl font-bold text-center text-gray-900">
              RM<Counter endValue={45678} />
            </p>
            <div className="w-full h-1 mt-4 bg-gradient-to-r from-dark-pink to-soft-pink animate-progress"></div>
          </div>
        </section>

        <section className="p-4 mt-16 bg-white border-2 shadow-lg rounded-xl border-dark-pink">
          <h2 className="mb-4 text-2xl font-semibold text-dark-pink">User Table</h2>
          <table className="w-full overflow-hidden border-collapse rounded-lg table-auto">
            <thead className="text-white bg-gradient-to-r from-dark-pink to-soft-pink">
              <tr>
                <th className="p-4 font-semibold tracking-wide text-left">ID</th>
                <th className="relative p-4 font-semibold tracking-wide text-left cursor-pointer" onClick={sortTable}>
                  Name
                  <span className="absolute transform -translate-y-1/2 top-1/2 right-4">
                    {sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : ''}
                  </span>
                </th>
                <th className="p-4 font-semibold tracking-wide text-left">Email</th>
                <th className="p-4 font-semibold tracking-wide text-left">Status</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {users.map((user, index) => (
                <tr key={user.id} className={`transition-all duration-300 hover:bg-soft-pink ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                  <td className="p-4 text-center border-b border-gray-300">{user.id}</td>
                  <td className="p-4 border-b border-gray-300">{user.name}</td>
                  <td className="p-4 border-b border-gray-300">{user.email}</td>
                  <td className="p-4 text-center border-b border-gray-300">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-4">
            <button
              onClick={toggleLightbox}
              className="px-8 py-3 text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50 active:scale-95"
            >
              How to Sort
            </button>
          </div>
        </section>
      </main>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-xl sm:max-w-[90%] md:max-w-[60%] lg:max-w-lg">
            <button
              onClick={toggleLightbox}
              className="absolute text-3xl text-red-600 top-2 right-4 hover:text-red-800 focus:outline-none"
            >
              &times;
            </button>

            <h2 className="mb-4 text-xl font-semibold text-dark-pink">Sorting Instructions</h2>
            <p className="text-gray-700">
              To sort the table, simply click on the "Name" column header. Clicking it once will sort the table in ascending order (A-Z). Clicking it again will sort the table in descending order (Z-A).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
