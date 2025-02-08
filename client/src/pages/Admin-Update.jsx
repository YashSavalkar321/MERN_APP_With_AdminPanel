import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  })

  const params = useParams()
  console.log("params single user:", params)
  const { AuthorizationToken, API } = useAuth()

  const geSingletUserById =  async () => {
    try {
        const response = await fetch(
            `http://localhost:5000/api/admin/users/${params.id}`,
            {
              method: "GET",
              headers: {
                Authorization: AuthorizationToken,
              },
            }
          );

          const data = await response.json();
          console.log("user Single Data", data);
          setData(data);

    } catch (error) {
        next(error);
    }
};


useEffect(() => {
    geSingletUserById()
  }, []);


  const handleInput = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }


  

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        toast.success("User updated successfully")
      } else {
        toast.error("Failed to update user")
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occurred while updating the user")
    }
  }

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-center">
          Update User
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={handleInput}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleInput}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={data.phone}
                onChange={handleInput}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

