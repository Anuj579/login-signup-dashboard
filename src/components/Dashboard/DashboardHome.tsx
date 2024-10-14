
export default function DashboardHome() {
    return (
        <>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="mt-4 text-gray-600">Welcome to your dashboard. Here you can view and manage your account.</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-2">Card {item}</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, repellat officia a sequi voluptates minima sint odit dolorem quae dolorum, ipsam voluptatibus odio. Illum, delectus?</p>
                    </div>
                ))}
            </div>
        </>
    )
}