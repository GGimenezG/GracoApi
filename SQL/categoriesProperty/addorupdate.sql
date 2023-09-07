CREATE PROCEDURE `category_property_addOrUpdate`(
	IN iId INT,
    IN iName VARCHAR(45),
    IN iDescription VARCHAR(45),
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE oId INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.
    CALL validateSession(iToken, iUser, @respuesta);
	SELECT @respuesta INTO vValid from dual;
    -- Si la sesión es valida
    IF vValid = 1 THEN
		-- si el id es 0, agrego uno nuevo, si es mayor a cero actualizo el registro
        IF iId > 0 THEN
			UPDATE categoriesproperties
			SET
			`name` = iName,
			`description` = iDescription,
			`updatedAt` = NOW()
			WHERE `idCategoriesProperties` = iId;
			SET oRes = 1;
			SET oMessage = 'Record updated successfully';
		ELSE
			INSERT INTO categoriesproperties 
			(
				`name`,
				`description`,
				`createdAt`,
                `status`
			)
			VALUES
			(
				iName,
				iDescription,
				NOW(),
                'A'
			);
            SET oId = LAST_INSERT_ID();
			SET oRes = 1;
			SET oMessage = 'Record added successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	SELECT oId as id, oRes as success, oMessage as message;
END