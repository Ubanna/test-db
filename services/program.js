import Programs from '../models/program';

export const createPage = async (pageBody) => {
  const slug = pageBody.name.toLowerCase().split(' ').join('-');
  pageBody.slug = slug;
  const page = new Programs(pageBody);
  const pageResponse = await page.save();
  return pageResponse;
};
export const listPages = async () => {
  const pages = await Programs.find({});
  return pages;
};
export const deletePage = async (pageId) => {};
export const updatePage = async (pageId, pageBody) => {};
export const pageDetails = async (pageId) => {
  const pages = await Programs.findOne({ _id: pageId });
  return pages;
};
export const savePageContent = async (pageId, content) => {
  const pageUpdated = await Programs.findOneAndUpdate({ _id: pageId }, { content });
  return pageUpdated;
};