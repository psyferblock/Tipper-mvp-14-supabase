// import { getMenuCategoriesServer } from "@/lib/get/getMenuCategories";
// import { createServerClient } from "@/utils/supabase-server";
// import Link from "next/link";
// import CategoriesNavLink from "./manageEntity-Components/CategoriesNavLink";
// import { managementCategories } from "./manageEntity-Components/ManagementCategories";
// import MobileDropdownManagement from "./manageEntity-Components/MobileDropdownManagement";
// import MobileHeaderOfCurrentManagementPage from "./manageEntity-Components/MobileHeaderOfCurrentManagementPage";

// export default async function ManageEntityLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: any;
// }) {
//   const supabase = createServerClient();

//   const entityId = params.entityId;
//   //Fetching from DB

//   const menuCategoryIds = await getMenuCategoriesServer(supabase, entityId);

//   const firstMenuCategoryId = menuCategoryIds[0]?.id;

//   return (
//     <div className="bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 pt-0 pb-7 sm:py-8">
//       {/* //////////////////////////////////////////////////////////////////// */}
//       {/* MOBILEEEEEE */}
//       <div className="sm:hidden pr-3 flex items-center justify-between h-20 sm:mt-0 bg-gray-300 w-full z-50 fixed text-xl font-bold">
//         <Link
//           href={`${entityId}/menu/${firstMenuCategoryId}`}
//           className="flex -ml-2 mr-1 w-fit items-center font-bold text-2xl"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </Link>
//         <MobileHeaderOfCurrentManagementPage />
//         <div className="sm:hidden">
//           <MobileDropdownManagement entityId={entityId} />
//         </div>
//       </div>
//       <div className="h-20 sm:h-0"></div>
//       {/* //////////////////////////////////////////////////////////////////// */}

//       {/* DESKTOPPPPPPP */}
//       <Link
//         href={`${params.entityId}/menu/${firstMenuCategoryId}`}
//         className="hidden sm:flex w-fit items-center font-bold text-2xl pt-6 pb-4"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 19.5L8.25 12l7.5-7.5"
//           />
//         </svg>
//         <div>Manage Entity</div>
//       </Link>

//       <div className="flex">
//         {/* LEFT MENU */}
//         <div className="hidden sm:block sm:flex-none sm:w-80 h-fit">
//           <div className="rounded-lg bg-white mr-4 py-6 flex flex-col drop-shadow-lg">
//             {managementCategories.map((category) => (
//               <CategoriesNavLink
//                 entityId={params.entityId}
//                 categoryRoute={category.route}
//               >
//                 {category.name}
//               </CategoriesNavLink>
//             ))}
//           </div>
//         </div>
//         <div className="grow w-1/4 sm:w-1/4 sm:grow">{children}</div>
//       </div>
//     </div>
//   );
// }