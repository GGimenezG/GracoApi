CREATE PROCEDURE `cities_addOrUpdate`(
	IN iId INT,
    IN iName VARCHAR(475),
    IN iShortName VARCHAR(105),
    IN iIdRegions INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN

	DECLARE vValid INT;
    DECLARE vValidRegion INT;
    DECLARE oId INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    
    SET oId = 0;
    
    CALL validateSession(iToken, iUser, @respuesta);

	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN
		
        IF iIdRegions > 0 THEN 
			SELECT COUNT(*)
            INTO vValidRegion 
            FROM regions r 
            WHERE r.idRegions = iIdRegions;
            
            IF vValidRegion > 0 THEN
				IF iId > 0 THEN
					UPDATE cities
					SET
					`fullname` = iName,
					`shortname` = iShortName,
					`Regions_idRegions` = iIdRegions,
					`updatedAt` = NOW()
					WHERE `idCities` = iId;
					SET oRes = 1;
					SET oMessage = 'Record updated successfully';
				ELSE
					INSERT INTO cities 
					(
						`fullname`,
						`shortname`,
						`createdAt`,
                        `Regions_idRegions`,
                        `status`
					)
					VALUES
					(
						iName,
						iShortName,
						NOW(),
                        iIdRegions,
                        'A'
					);
                    SET oId = LAST_INSERT_ID();
					SET oRes = 1;
					SET oMessage = 'Record added successfully';
				END IF;
			ELSE 
				SET oRes = 0;
				SET oMessage = 'Invalid region Id';
            END IF;
        ELSE
			SET oRes = 0;
			SET oMessage = 'Invalid region Id';
        END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
    SELECT oId as id, oRes as success, oMessage as message;
END