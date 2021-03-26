  
import ListCategories from '../components/categories/list'
import HeaderCategories from '../components/categories/header'
import Page from "../components/app/page";

export default function Categories()  {
  return <div>
    <Page title="Categories">
      <ListCategories />
    </Page>
  </div>
}