CREATE PROCEDURE `category_property_delete`(
	IN iId INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    DECLARE vCount INT;
	-- Validar sesión
    CALL validateSession(iToken, iUser, @respuesta);
	SELECT @respuesta INTO vValid from dual;
    -- Si es valida.
    IF vValid = 1 THEN
		-- Consulto si existe la categoria en un registro de propiedad.
		SELECT count(*) 
        INTO vCount
        FROM propertieshascategoriesproperties pc
        WHERE pc.CategoriesProperties_idCategoriesProperties = iId;
        IF vCount = 0 THEN -- Si no hay registros  
			 UPDATE categoriesproperties
			SET
			`status` = 'I',
			`updatedAt` = NOW()
			WHERE `idCategoriesProperties` = iId;
            SET oRes = 1;
			SET oMessage = 'Deleted successfully';
		ELSE
			SET oRes = 0;
			SET oMessage = 'One or more records associated with another entity';
        END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oRes as success, oMessage as message; -- retornamos respuesta
END