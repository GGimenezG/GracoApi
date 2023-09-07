CREATE PROCEDURE `bathrooms_addOrUpdate`(
	IN iId INT,
    IN iDescription VARCHAR(45),
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN

	DECLARE vValid INT;
    DECLARE oId INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    
    SET oId = 0;
    
    CALL validateSession(iToken, iUser, @respuesta);

	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN
    
		IF iId > 0 THEN
			UPDATE bathrooms
			SET
			`description` = iDescription,
			`updatedAt` = NOW()
			WHERE `idBathrooms` = iId;
			SET oRes = 1;
			SET oMessage = 'Record updated successfully';
		ELSE
			INSERT INTO bathrooms
			(
				`description`,
				`createdAt`,
                `status`
			)
			VALUES
			(
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