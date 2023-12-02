import RecommendedBooks from '@/app/components/RecommendedBooks';
import client from '@/utils/contentfulClient';
export const metadata = {
  title: 'Recommended Books',
  description:
    'Hand-picked Recommended Books in a variery of fields, from Poetry to Literature in Several Languages, including English and Hebrew',
  keywords: [
    'Recommended Poetry',
    'Recommended Literature',
    'Recommended English and Hebrew Books',
  ],
};

export const revalidate = 604800;
export async function getRecommendations() {
  const baseURL = process.env.NEXT_PUBLIC_CONTENTFUL_BASE_URL;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
  const contentType = 'recommendations';

  try {
    const response = await client.getEntries({
      content_type: 'recommendations',
    });
    return response.items;
  } catch (error) {
    console.log('error =', error);
    return error;
  }
}

const recommendedPage = async () => {
  const recommendedBooks = await getRecommendations();

  return (
    <div>
      <RecommendedBooks
        recommendationItems={recommendedBooks}
      ></RecommendedBooks>
    </div>
  );
};

export default recommendedPage;
