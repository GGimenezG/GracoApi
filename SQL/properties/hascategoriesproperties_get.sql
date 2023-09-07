CREATE PROCEDURE `propertieshascategoriesproperties_get`(
	IN iIdProperty INT
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.    
   -- CALL validateSession(iToken, iUser, @respuesta);
	-- SELECT @respuesta INTO vValid from dual;
   -- IF vValid = 1 THEN -- Si la sesión es valida
		SELECT top.CategoriesProperties_idCategoriesProperties as id, cp.name, cp.description 
		FROM propertieshascategoriesproperties top 
        INNER JOIN categoriesproperties cp ON cp.idCategoriesProperties = top.CategoriesProperties_idCategoriesProperties
		WHERE top.Properties_idProperties = iIdProperty;
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	-- ELSE 
	-- SET oRes = 0;
    --    SET oMessage = 'Invalid session token';
	-- END IF;
    SELECT oRes as success, oMessage as message;
END