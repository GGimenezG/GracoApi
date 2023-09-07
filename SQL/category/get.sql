CREATE PROCEDURE `category_get`(
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
    IF vValid = 1 THEN -- Si la sesión es valida
		IF iId = 0 THEN -- Si id es 0 consulto todas las categorías
			SELECT c.idCategories as id, c.name, c.description
			FROM categories c 
			WHERE c.status = 'A';
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE -- Si el id es distinto a 0 consulto solo esa categoría
			SELECT c.idCategories as id, c.name, c.description
			FROM categories c 
			WHERE c.status = 'A' AND c.idCategories = iId;
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oRes as success, oMessage as message;
END