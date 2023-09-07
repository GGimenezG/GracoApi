CREATE PROCEDURE `postshascategoriesposts_get`(
	IN iIdPost INT
)
BEGIN
	-- Declaramos variables a usar
	
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.    
   
   
		SELECT phc.Categories_idCategories as id, c.name, c.description 
		FROM postshascategories phc 
        INNER JOIN categories c ON c.idCategories = phc.Categories_idCategories
		WHERE phc.Posts_idPosts = iIdPost;
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	
    SELECT oRes as success, oMessage as message;
END