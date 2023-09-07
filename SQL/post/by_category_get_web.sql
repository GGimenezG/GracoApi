CREATE PROCEDURE `posts_by_category_get_web`(
	IN iId INT
)
BEGIN
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
		
	SELECT p.idPosts as id,p.title as name, p.content ,c.idCategories as idCategory, pi.url as image from categories c
	JOIN postshascategories phc ON phc.Categories_idCategories = c.idCategories
	JOIN posts p ON phc.Posts_idPosts = p.idPosts AND p.status = 'A'
    INNER JOIN postsimages pi ON pi.idPost = p.idPosts AND pi.order = 1
	WHERE c.idCategories = iId AND c.status = 'A';
    
	SET oRes = 1;
	SET oMessage = 'Get data successfully';
	
    SELECT oRes as success, oMessage as message;
END