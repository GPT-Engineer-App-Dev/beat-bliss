import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md p-2 border rounded-md"
        />
        <div className="ml-4">
          <button className="p-2 bg-gray-200 rounded-full">User Menu</button>
        </div>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Featured Playlists</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>New Releases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Top Charts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <button className="p-2">Previous</button>
          <button className="p-2">Play/Pause</button>
          <button className="p-2">Next</button>
        </div>
        <div className="flex-1 mx-4">
          <div className="w-full h-1 bg-gray-600">
            <div className="h-full bg-white" style={{ width: "50%" }}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;