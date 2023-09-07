CREATE PROCEDURE `communes_addOrUpdate`(
	IN iId INT,
    IN iName VARCHAR(45),
    IN iIdCity INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN

	DECLARE vValid INT;
    DECLARE vValidRegion INT;
    DECLARE oRes INT;
    DECLARE oId INT;
    DECLARE oMessage VARCHAR(255);
    SET oId = 0;
    CALL validateSession(iToken, iUser, @respuesta);

	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN
		
        IF iIdCity > 0 THEN 
			SELECT COUNT(*)
            INTO vValidRegion 
            FROM cities c
            WHERE c.idCities = iIdCity;
            
            IF vValidRegion > 0 THEN
				IF iId > 0 THEN
					UPDATE communes
					SET
					`name` = iName,
					`Cities_idCities` = iIdCity,
					`updatedAt` = NOW()
					WHERE `idCommunes` = iId;
					SET oRes = 1;
					SET oMessage = 'Record updated successfully';
				ELSE
					INSERT INTO communes 
					(
						`name`,
						`createdAt`,
                        `Cities_idCities`,
                        `status`
					)
					VALUES
					(
						iName,
						NOW(),
                        iIdCity,
                        'A'
					);
                    SET oId = LAST_INSERT_ID();
					SET oRes = 1;
					SET oMessage = 'Record added successfully';
				END IF;
			ELSE 
				SET oRes = 0;
				SET oMessage = 'Invalid city Id';
            END IF;
        ELSE
			SET oRes = 0;
			SET oMessage = 'Invalid city Id';
        END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oId as id, oRes as success, oMessage as message;
END