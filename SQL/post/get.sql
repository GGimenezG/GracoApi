CREATE PROCEDURE `post_get`(
	IN iId INT,
	IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.
	CALL validateSession(iToken, iUser, @respuesta);
    
	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN
		IF iId = 0 THEN
			SELECT p.idPosts as id,p.title as title, p.content, pi.url as principalImage
            FROM posts p
			LEFT JOIN postsimages pi ON pi.idPost = p.idPosts AND pi.order = 1
            WHERE p.status = 'A';
            
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE
			SELECT p.idPosts as id,p.title as title, p.content
            FROM posts p
            LEFT JOIN postsimages pi ON pi.idPost = p.idPosts AND pi.order = 1
            WHERE p.idPosts = iId AND p.status = 'A';
            
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    
    SELECT oRes as success, oMessage as message;
END