import { profileData } from '../data/profile';

const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

// Helper to format Strapi image URLs
export const getStrapiMedia = (media) => {
  if (!media) return null;
  // If it's an array of media (multiple media)
  if (Array.isArray(media)) {
    return media.map(item => item.url.startsWith('/') ? `${STRAPI_URL}${item.url}` : item.url);
  }
  // Single media format or object structure
  const url = media.url;
  if (!url) return null;
  return url.startsWith('/') ? `${STRAPI_URL}${url}` : url;
};

// Fetch Blogs from Strapi (falls back to static data if CMS is down or empty)
export const fetchBlogs = async (limit) => {
  try {
    let url = `${STRAPI_URL}/api/blogs?populate=*&sort[0]=publishedAt:desc`;
    if (limit) {
      url += `&pagination[pageSize]=${limit}`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch from CMS');
    const { data } = await res.json();
    
    if (!data || data.length === 0) return profileData.blogPosts;

    return data.map(item => {
      // Parse comma-separated tags
      const tags = typeof item.tags === 'string' 
        ? item.tags.split(',').map(t => t.trim()).filter(Boolean)
        : (Array.isArray(item.tags) ? item.tags : []);

      const mediaList = getStrapiMedia(item.media || item.image);
      const coverImage = Array.isArray(mediaList) && mediaList.length > 0 ? mediaList[0] : null;

      return {
        id: item.documentId || `blog-${item.id}`,
        title: item.title,
        date: item.date,
        readTime: item.readTime,
        summary: item.summary,
        tags: tags,
        content: item.content, 
        image: coverImage,
        isStrapi: true
      };
    });
  } catch (error) {
    console.log('Using static blogs fallback:', error.message);
    return profileData.blogPosts;
  }
};

// Fetch Events from Strapi (falls back to static data if CMS is down or empty)
export const fetchEvents = async (limit) => {
  try {
    let url = `${STRAPI_URL}/api/events?populate=*&sort[0]=publishedAt:desc`;
    if (limit) {
      url += `&pagination[pageSize]=${limit}`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch from CMS');
    const { data } = await res.json();

    if (!data || data.length === 0) return profileData.events;

    return data.map(item => {
      // Get array of media URLs from the multiple media "image" field
      const mediaList = getStrapiMedia(item.image); 
      const coverImage = Array.isArray(mediaList) && mediaList.length > 0 ? mediaList[0] : null;
      const allImages = Array.isArray(mediaList) ? mediaList : [];

      return {
        id: item.documentId || `ev-${item.id}`,
        title: item.title,
        category: item.category,
        date: item.date,
        time: item.time,
        venue: item.venue,
        speaker: item.speaker || null,
        coordinator: item.coordinator || null,
        image: coverImage,
        images: allImages,
        description: item.description,
        isStrapi: true
      };
    });
  } catch (error) {
    console.log('Using static events fallback:', error.message);
    return profileData.events;
  }
};
