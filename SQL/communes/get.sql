CREATE PROCEDURE `communes_get`(
	IN iId INT,
    IN iIdCity INT,
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
		IF iIdCity = 0 THEN
			IF iId = 0 THEN
				SELECT c.idCommunes as id, c.name, c.Cities_idCities as idCity
				/*INTO @selectdata*/
				FROM communes c 
                WHERE c.status = 'A';
				SET oRes = 1;
				SET oMessage = 'Get data successfully';
			ELSE
				SELECT c.idCommunes as id, c.name, c.Cities_idCities as idCity
				/*INTO @selectdata*/
				FROM communes c 
                WHERE c.status = 'A' AND c.idCommunes = iId;
				SET oRes = 1;
				SET oMessage = 'Get data successfully';
			END IF;
		ELSE 
			IF iId = 0 THEN
				SELECT c.idCommunes as id, c.name, c.Cities_idCities as idCity
				/*INTO @selectdata*/
				FROM communes c 
                WHERE c.status = 'A' AND c.Cities_idCities = iIdCity;
				SET oRes = 1;
				SET oMessage = 'Get data successfully';
			ELSE
				SELECT c.idCommunes as id, c.name, c.Cities_idCities as idCity
				/*INTO @selectdata*/
				FROM communes c 
                WHERE c.status = 'A' AND c.idCommunes = iId AND c.Cities_idCities = iIdCity;
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