import './CatalogCategory.css';
import Link from '../Link/Link';
import { Category } from 'src/data/Categories';

import CatalogSubCategory from '../CatalogSubCategory/CatalogSubCategory';

type CatalogCategoryProps = {
  cats: Category[];
}

export default function CatalogCategory({cats}: CatalogCategoryProps ) {

  const main_cats = cats.map((cat) => cat.title);

  return (
    <>
      <div className='cat-container'>
        {cats.map((cat) =>
          <div className='subcats-list'>
            <div className='cat-title'>{cat.title}</div>
            {cat.subCategories?.map((subcat) => 
              <Link
                handler={() => {}}
                content={<CatalogSubCategory text={subcat.title}/>}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
