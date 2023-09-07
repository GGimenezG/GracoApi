CREATE PROCEDURE `cities_get`(
	IN iId INT,
    IN iIdRegion INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
        
    CALL validateSession(iToken, iUser, @respuesta);

	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN
		IF iIdRegion = 0 THEN
			IF iId = 0 THEN
				SELECT c.idCities as id, c.fullname, c.shortname, c.Regions_idRegions as idRegion
				/*INTO @selectdata*/
				FROM cities c 
                WHERE c.status = 'A';
				SET oRes = 1;
				SET oMessage = 'Get data successfully';
			ELSE
				SELECT c.idCities as id, c.fullname, c.shortname, c.Regions_idRegions as idRegion
				/*INTO @selectdata*/
				FROM cities c 
                WHERE c.status = 'A' AND c.idCities = iId;
				SET oRes = 1;
				SET oMessage = 'Get data successfully';
			END IF;
		ELSE 
			IF iId = 0 THEN
				SELECT c.idCities as id, c.fullname, c.shortname, c.Regions_idRegions as idRegion
				/*INTO @selectdata*/
				FROM cities c 
                WHERE c.status = 'A' AND c.Regions_idRegions = iIdRegion;
				SET oRes = 1;
				SET oMessage = 'Get data successfully';
			ELSE
				SELECT c.idCities as id, c.fullname, c.shortname, c.Regions_idRegions as idRegion
				/*INTO @selectdata*/
				FROM cities c 
                WHERE c.status = 'A' AND c.idCities = iId AND c.Regions_idRegions = iIdRegion;
				SET oRes = 1;
				SET oMessage = 'Get data successfully';
			END IF;
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	
    SELECT oRes as success, oMessage as message;
END