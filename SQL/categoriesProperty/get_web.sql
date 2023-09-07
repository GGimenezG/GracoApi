CREATE PROCEDURE `category_property_get_web`()
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
	SELECT cp.idCategoriesProperties as id, cp.name, cp.description
	FROM categoriesproperties cp 
	WHERE cp.status = 'A';
	SET oRes = 1;
	SET oMessage = 'Get data successfully';
    SELECT oRes as success, oMessage as message;
END