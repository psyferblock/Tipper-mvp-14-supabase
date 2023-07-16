import MenuCategoriesPageComponent from './MenuCategoriesPageComponent'

interface MenuCategoriesPageProps {
  params: { entityUniqueName: string; menuId: string; categoryId: string };
}
const menuCategoryPage: React.FC<MenuCategoriesPageProps> = ({ params }) => {
  const { entityUniqueName, menuId, categoryId } = params;

  return (
    <div>
      <MenuCategoriesPageComponent props={params}/>
    </div>
  )
}
export default menuCategoryPage