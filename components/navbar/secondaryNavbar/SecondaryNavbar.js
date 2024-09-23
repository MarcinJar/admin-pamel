export default function SecondaryNavbar() {
  return (
    <div className="flex items-center justify-between p-4 w-full test-sm bg-white border-b 
    border-gray-200 shadow-sm z-30 md:px-12">
      <div className="mr-4 w-1/2 lg:w-1/3">
        WYSZUKIWARKA
      </div>    
      <div className="relative">
        <div className="flex items-center cursor-pointer select-none">
          <div className="mr-1 text-gray-800 whitespace-nowrap flex items-center">
            <div className="font-bold">
              UŻYTKOWNIK
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}