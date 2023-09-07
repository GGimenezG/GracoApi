CREATE PROCEDURE `category_get_web`()
BEGIN
	-- Declaramos variables a usar
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
	-- Consulto todas las categorías
		SELECT c.idCategories as id, c.name, c.description
		FROM categories c 
		WHERE c.status = 'A';
	SET oRes = 1;
	SET oMessage = 'Get data successfully';
    SELECT oRes as success, oMessage as message;
END