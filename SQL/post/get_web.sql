CREATE PROCEDURE `post_get_web`(
	IN iId INT
)
BEGIN
   DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
		
			SELECT p.idPosts as id,p.title as title, p.content
            FROM posts p
            WHERE p.idPosts = iId AND p.status = 'A';
            
	SET oRes = 1;
	SET oMessage = 'Get data successfully';
	
    SELECT oRes as success, oMessage as message;
END