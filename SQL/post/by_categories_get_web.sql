CREATE PROCEDURE `posts_by_categories_get_web`(
	IN iIds varchar(255)
)
BEGIN
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
	
    SELECT p.idPosts as id,p.title as name, p.content ,c.idCategories as idCategory, pi.url as principalImage from categories c
	JOIN postshascategories phc ON phc.Categories_idCategories = c.idCategories
	JOIN posts p ON phc.Posts_idPosts = p.idPosts AND p.status = 'A'
    INNER JOIN postsimages pi ON pi.idPost = p.idPosts AND pi.order = 1
	WHERE FIND_IN_SET(c.idCategories,iIds) AND c.status = 'A' order by c.idCategories;
            
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
	
    SELECT oRes as success, oMessage as message;
END